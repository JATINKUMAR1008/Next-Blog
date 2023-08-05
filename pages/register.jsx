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

const Register = () => {
  return (
    <div className={variables.hero}>
      <div className={variables.hero_header}>
        <img className={variables.logo_img} src={logoImg.src} />
      </div>
      <div className={variables.hero_content}>

        <div className={variables.hero_Form}>


    <h1>Welcome Back !</h1>
    <p>login to your account to get access to more content</p>


          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email ) {
                errors.email = 'Required';
               
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(true);
              }, 400);
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
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
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
    </div>
  )
}

export default Register