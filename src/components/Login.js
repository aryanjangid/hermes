import React from 'react'
import classes from './Login.module.css'
import Button from "./Button.js"
import NormalButton from "./NormalButton.js"

const Login = () => {
  return (
    <>
    <div className={classes.mainDiv}>
      <div className={classes.innerDiv}>
        <h1 className={classes.headingSignup}>Create New Account</h1>
        <h4 className={classes.headingtoLogin}>
          Already A Member ? <span className={classes.toLogin}>Sign Up</span>
        </h4>
        <form className={classes.formSignup} action="">
          <label htmlFor="email">E-mail</label>
          <input className={classes.inputBoxes} id="email" type="email" placeholder="johnwick@gmail.com" />
          <label htmlFor="password">Password</label>
          <input className={classes.inputBoxes} id="password" type="password" />
          <NormalButton name="Login"></NormalButton>
        </form>
      </div>
    </div>
  </>
  )
}

export default Login
