import React, { useState } from 'react'
import components from './components.module.scss'
import buttons from '../styles/buttons.module.scss'
import { RxCross2 } from 'react-icons/rx'
import { useFormik } from 'formik'
const initialState = {
  email: '',
  password: ''
}
const Register = ({click,handleClick}) => {
  const formik = useFormik({
    initialValues:initialState,
    onSubmit:(values)=>{
      console.log(values)
    }

  })

  return (
    <div className={click?`${components.register_container}`:`${components.hidden}`}>
        <div className={components.form_container}>
            <span className={components.heading_button}><h1>Register</h1>
            <RxCross2 onClick={handleClick}/>
            </span>
            <p>Register to Unlock new Potential for you work!!</p>
            <form onSubmit={formik.handleSubmit}>
                <span>
                <label>Email</label>
                <input placeholder='Enter your Email' id='email' name='email' value={formik.values.email} onChange={formik.handleChange}/></span>
                <span><label>Create Password</label>
                <input placeholder='Create Password' id='password' name='password' value={formik.values.password} onChange={formik.handleChange}/></span>
            </form>
            <button onClick={formik.handleSubmit} className={buttons.btn_new}>Submit</button>
            
        </div>
        
    </div>
  )
}

export default Register