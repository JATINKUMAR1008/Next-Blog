import React, { useState } from 'react'
import variables from '../../styles/variables.module.scss'
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import logoImg from "@/assets/logo.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Loader } from 'rsuite';

const Cr = () => {
    const router = useRouter()
    const {slug} = router.query
    const [state,setState] = useState(false)
    /*name: String,
    password: String,
    email: String,
    img: String,
    subsriptions: [
        {
            userId: String
        }
    ],
    subscribers: Number,
    status: Boolean,
    verify: Boolean`*/
    const preset_key = "am9op2bj"
    const cloud_name = "dhiykiupn"
    const[image,setImage] = useState(null)
    const [load,setLoad] = useState(true)
    const ImgUpload = (e) =>{
        const file = e.target.files[0]
        const formdata = new FormData()
        formdata.append('file',file)
        formdata.append("upload_preset",preset_key)
        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,formdata).then(res=>{setImage(res.data.secure_url); console.log(res.data.secure_url)}).catch(err=>console.log(err))
    }
  return (
    <div className={variables.hero}>
      <div className={variables.hero_header} onClick={() => router.push('/content')}>
        <img className={variables.logo_img} src={logoImg.src} />
      </div>
      <div className={`${variables.hero_content} + w-full h-full`}>

        <div className={variables.hero_Form}>


          <h1 className='block'>Tell us More About you</h1>
        


          <Formik
            initialValues={{ name: '',img: '',_id: slug}}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.email = 'Required';

              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              if(state){
                const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({name: values.name,img: image,_id: slug})
                };
                console.log(requestOptions.body)
                fetch('/api/reg', requestOptions)
                  .then(response => response.json())
                  .then(data => {
                    console.log(data)
                    if (data.success) {
                      toast.success("Register SuccessFully", {
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
                    }
                  });
  
                setSubmitting(false);
              }
              
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
                <div className='w-full mb-5 flex'>
                  <ToastContainer/>
              <form onSubmit={handleSubmit}>
                {!state?<><label>Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <div className='text-sm text-red-600'>{errors.email && touched.email && errors.email}</div></>:<>
                <label>Your Image</label>
                <input type='file' onChange={(e)=>ImgUpload(e)}/>
                </>}
                {
                state?image?<button type='submit'  disabled={isSubmitting}>
                    Submit
                  </button>:<><button disabled={true}>
                    <Loader size='sm' className='bg-white'/>
                    </button></>:<button onClick={()=>setState(!state)}>
                  Next
                </button>
                }
               
              </form>
              
              
             

              </div>
            )}
          </Formik>


        </div>

      </div>


    </div>
  )
}

export default Cr