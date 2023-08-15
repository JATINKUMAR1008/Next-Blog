import React, { useState } from 'react'
import variables from '../../styles/variables.module.scss'
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import logoImg from "@/assets/logo.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


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
    const ImgUpload = (e) =>{
        const file = e.target.files[0]
        const formdata = new FormData()
        formdata.append('file',file)
        formdata.append("upload_preset",preset_key)
        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,formdata).then(res=>console.log(res)).catch(err=>console.log(err))
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
            initialValues={{ name: '',img: ''}}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.email = 'Required';

              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              if (!values.password && String(values.password).length < 12) {
                errors.password = 'Required and Must be of 12 characters.'
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
              };
              fetch('/api/RegisterUser', requestOptions)
                .then(response => response.json())
                .then(data => {
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
                    setTimeout(()=>router.push(`/completeReg/${data._id}`),3000)
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
                <div className='w-full mb-5 flex overflow-x-visible gap-4'>
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
                state?<button type='submit' disabled={isSubmitting}>
                    Submit
                  </button>:<button onClick={()=>setState(!state)}>
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