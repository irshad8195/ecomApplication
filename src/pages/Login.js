import React from 'react'
import Class from './Login.module.css'

const Login = () => {
  return (
    <div className={Class.container}>
      <div className={Class.wrapper}>
        <h1 className={Class.h1}>SIGN IN</h1>
        <form className={Class.form}>
           
            <input className={Class.input} placeholder='username' />
            <input className={Class.input} placeholder='password' />
        
            <button className={Class.button}>LOGIN</button>
        <a className={Class.a}>FORGOT THE PASSWORD ?</a>
        <a className={Class.a}>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  )
}

export default Login
