import React, { useState } from 'react'
import components from './components.module.scss'
import buttons from '../styles/buttons.module.scss'
import { RxCross2 } from 'react-icons/rx'
const Register = ({click,handleClick}) => {
  return (
    <div className={click?`${components.register_container}`:`${components.hidden}`}>
        <div className={components.form_container}>
            <span className={components.heading_button}><h1>Register</h1>
            <RxCross2 onClick={handleClick}/>
            </span>
            <p>Register to Unlock new Potential for you work!!</p>
            <form>
                <span>
                <label>Email</label>
                <input placeholder='Enter your Email'/></span>
                <span><label>Create Password</label>
                <input placeholder='Create Password'/></span>
            </form>
            <button className={buttons.btn_new}>Submit</button>
            
        </div>
        
    </div>
  )
}

export default Register