import React from 'react'
import Class from './Register.module.css'

const Register = () => {
  return (
    <div className={Class.container}>
      <div className={Class.wrapper}>
        <h1 className={Class.h1}>CREATE AN ACCOUNT</h1>
        <form className={Class.form}>
            <input className={Class.input} placeholder='first name' />
            <input className={Class.input} placeholder='last name' />
            <input className={Class.input} placeholder='username' />
            <input className={Class.input} placeholder='email' />
            <input className={Class.input} placeholder='password' />
            <input className={Class.input} placeholder='confirm password' />
            <span className={Class.span}>
                By creating an account, I consent to the processing of my personal
                data in accordance witht the <b>PRIVACY POLICY</b>
            </span>
            <button className={Class.button}>CREATE</button>
        </form>
      </div>
    </div>
  )
}

export default Register
