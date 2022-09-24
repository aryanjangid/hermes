import React from 'react'
import classes from './Login.module.css'
// import Button from "./Button.js"
import NormalButton from "./NormalButton.js"
import { useNavigate } from 'react-router-dom'

const Login = ({ setSw }) => {
  const navigate = useNavigate()
  // const save = (e) => {
  //   e.preventDefault()
  //   navigate('/')
  // }

  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.innerDiv}>
          <h1 className={classes.headingSignup}>Let's Eat</h1>
          <h4 className={classes.headingtoLogin}>
            New to Ceres ? <span className={classes.toLogin} onClick={() => setSw(false)}>Sign Up</span>
          </h4>
          <form className={classes.formSignup} >
            <label htmlFor="email">E-mail</label>
            <input className={classes.inputBoxes} id="email" type="email" placeholder="johnwick@gmail.com" />
            <label htmlFor="password">Password</label>
            <input className={classes.inputBoxes} id="password" type="password" />
            <div className={classes.divButtons}>
              <input type="radio" name="type" id="radio1" />
              <label for="radio1">Mess</label>
              <input type="radio" name="type" id="radio2" />
              <label for="radio2">User</label>
            </div>
            <div onClick={(e) => { navigate('/'); e.preventDefault() }} style={{ width: '100%' }}>
              <NormalButton style={{ pointerEvents: 'none', width: '100%' }} name="Login" ></NormalButton>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
