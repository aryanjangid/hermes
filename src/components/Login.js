import React from 'react'
import classes from './Login.module.css'

const Login = () => {
  return (
    <div>
      <div className={classes.div1}>
        <h2>Login To Continue </h2>
        <form>
          <div>
            <input type="text" required />
          </div>
          <div className="mb-3 my-4">
            <input type="password" placeholder='Enter Password' required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login
