import React from 'react'
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const router = useRouter()
  return (
    <div className={variables.hero}>
      <div className={variables.hero_header} onClick={() => router.push('/content')}>
        <img className={variables.logo_img} src={logoImg.src} />
      </div>
      <div className={`${variables.hero_content} + w-full h-full`}>

        <div className={variables.hero_Form}>


          <h1>Register !</h1>
          <p>Create new account to get new horizons</p>


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
              <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <div className='text-sm text-red-600'>{errors.email && touched.email && errors.email}</div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <div className='text-sm text-red-600'>{errors.password && touched.password && errors.password}</div>

                <span>
                  <input type='checkbox' className='bg-white text-white outline-none ' />
                  <a href="">terms & conditions.</a>
                </span>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>


        </div>

      </div>


    </div>
  )
}

export default Register