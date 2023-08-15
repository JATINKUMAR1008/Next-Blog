import React, { useState } from 'react'
import variables from '../styles/variables.module.scss'
import { Hero } from "../components/Hero"
import landingImg from "@/assets/hero_img.jpg";
import buttons from '@/styles/buttons.module.scss'
import logoImg from "@/assets/logo.png";
import n_img from '@/assets/icons8-notion.svg'
import b_img from '@/assets/icons8-blogger.svg'
import s_img from '@/assets/icons8-squarespace.svg'
import t_img from '@/assets/icons8-twitter.svg'
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader_bg from './Loader';
const Login = () => {
  const router = useRouter()
  const [load,setLoad] = useState(false)
  return (
    <div className={variables.hero}>
      <div className={variables.hero_header} onClick={() => router.push('/content')}>
        <img className={variables.logo_img} src={logoImg.src} />
      </div>
      <div className={variables.hero_content}>
        <ToastContainer />

        <div className={variables.hero_Form}>


          <h1>Welcome Back !</h1>
          <p>login to your account to get access to more content</p>


          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';

              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setLoad(true)
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
              };
              fetch('/api/auth', requestOptions)
                .then(response => response.json())
                .then(data => {
                  
                  if (data.success) {
                    
                    if(!data.status){
                      setTimeout(()=> router.push(`/completeReg/${data._id}`),3000)
                     
                    }else{
                      setTimeout(()=> router.push(`/content`),3000)
                    }
                    toast.success("Login Successfull", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    })
                    
                  } else {
                    toast.error(data.error, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    })
                    setLoad(false)
                  }
                });
              setSubmitting(false);
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
              <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <span>
                  <a href="/forgot">Forgot password?</a>
                </span>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>


        </div>

      </div>

      <img src={landingImg.src} alt="name" className={variables.hero_img} />
      {load?<Loader_bg/>:<></>}
    </div>
  )
}

export default Login