import React, { useRef, useState } from 'react'
import variables from '../styles/variables.module.scss'
import Tiptap from '../components/TipTap'
import JoditEditor from 'jodit-react'
import logoImg from "@/assets/logo.png";
import { TagPicker } from 'rsuite'
import "rsuite/dist/rsuite.min.css"
import buttons from '../styles/buttons.module.scss'
import { useRouter } from 'next/router';
import Loader_bg from '../pages/Loader'
import axios from 'axios';
import { Formik } from 'formik';
import {useAppSelector} from '../redux/store'
import { ToastContainer, toast } from 'react-toastify';

const Create = () => {
    const editor = useRef(null)
    const [content,setContent] = useState('')
    const router = useRouter()
  const [image,setImage] = useState(null)
  const [loadi, setLoadi] = useState(false)
    /*title: String,
    desc: String,
    author: String,
    date: String,
    readTime: String,
    img: String,
    tags: [
        {tag: String}
    ],
    content: String */
    const user = useAppSelector((state)=>state.authReducer.value.user)
    var array = []
    const [tags,setTags] = useState([])
   const handleChangeTags = (value,item) =>{
    array = value
    console.log("array",array)
    console.log(value)
   }

    const data = ["programming", "data science", "technology", "self improvement", "writing", "relationships", "machine learning", "productivity", "politics"].map(
        item => ({
          label: item,
          value: item,
          
        })
      );
      const preset_key = "am9op2bj"
  const cloud_name = "dhiykiupn"
      const ImgUpload = (e) => {
        setLoadi(true)
        const file = e.target.files[0]
        const formdata = new FormData()
        formdata.append('file', file)
        formdata.append("upload_preset", preset_key)
        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formdata).then(res => { setImage(res.data.secure_url); setLoadi(false); console.log(res.data.secure_url) }).catch(err => console.log(err))
      }
      function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        
        return `${year}-${month}-${day}`;
      }
      function getCurrentTime() {
        const today = new Date();
        const hours = String(today.getHours()).padStart(2, '0');
        const minutes = String(today.getMinutes()).padStart(2, '0');
        const seconds = String(today.getSeconds()).padStart(2, '0');
        
        return `${hours}:${minutes}:${seconds}`;
      }
  return (
    <div className={variables.hero}>
      {loadi?<Loader_bg className="z-10"/>:<></>}
      <ToastContainer/>
      <div className={variables.hero_header} onClick={() => router.push('/content')}>
        <img className={variables.logo_img} src={logoImg.src} />
      </div>
    <div className='w-full flex h-full md:h-[100vh] mt-[5rem] items-center justify-center'>
        <div className="w-[100vh] py-5 px-10 sm:px-20">
            <h1 className='text-2xl font-bold mb-1'>What{"'s"} on your mind</h1>

            <p className='text-gray-600 font-semibold mb-3'>Start creating some blogs for others.</p>
            <Formik initialValues={{ title: '', desc: '',tags: [],content: '',img: ''  }}
            onSubmit={(values, { setSubmitting }) => {
              const date = getCurrentDate()
              const time = getCurrentTime()
              console.log({title: values.title,desc: values.desc,tags: array,content: content,img: image,date: date,readTime: time})
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({title: values.title,desc: values.desc,tags: array,content: content,img: image,date: date,readTime: time})
              };
              fetch('/api/blogs/CreateBlog', requestOptions)
                .then(response => response.json())
                .then(data => {
                  if (data.success) {
                    toast.success("Created SuccessFully", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    })
                    setTimeout(()=>router.push(`/content`),3000)
                  }else{
                    toast.error("Internal server error",{
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    })
                    
                  }
                });

              setSubmitting(true);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
            <form className='w-full my-2' onSubmit={handleSubmit}>
                <span className='flex flex-col items-start'>
                    <label className='text-md font-semibold'>Title</label>
                <input type='text' placeholder='Enter Title of the Blog' className={variables.input} value={values.title} onChange={handleChange} name='title'/>
                </span>
                <span className='flex flex-col items-start'>
                    <label className='text-md font-semibold'>Description</label>
                <input type='text' placeholder='Enter Description of the Blog' className={variables.input} value={values.desc} onChange={handleChange} name='desc'/>
                </span>
                <span className='flex flex-col items-start my-2'>
                    <label className='text-md font-semibold'>Tags</label>
                    <TagPicker className='w-full my-2' creatable={true} data={data} block onChange={(value, item) => handleChangeTags(value,item)}/>
                </span>
                <span className='my-4'>
                    <label className='text-md font-semibold my-1'>Content</label>
                    <JoditEditor
                    className='w-full outline-black outline-1'
                    ref={editor}
                    value={content}
                    onChange={newContent => setContent(newContent)}/>
                </span>
                <span className='flex flex-col my-2 items-start'>
                <label className='text-md font-semibold'>Cover Image</label>
                    <input type='file' className='bg-white py-4 border-black outline-1 outline-black px-10 w-full' onChange={(e) => ImgUpload(e)} />
                </span>
                {!Object.keys(user).length?<button onClick={()=>router.push('/login')}>Submit</button>:<button type='submit' className={buttons.btn_primary} onClick={handleSubmit}>Submit</button>}
                
            </form>)}
            </Formik>
        </div>

    </div>
    </div>
  )
}

export default Create