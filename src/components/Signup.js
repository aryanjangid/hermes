import React from "react";
import classes from "./Signup.module.css";
import NormalButton from "./NormalButton.js"
import { useNavigate } from "react-router-dom";

const Signup = ({ setSw }) => {
  const save = (e) => {
    e.preventDefault();
    localStorage.setItem('in', 'yes');
    console.log('save')
  }
  const navigate = useNavigate()
  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.innerDiv}>
          <h1 className={classes.headingSignup}>Create New Account</h1>
          <h4 className={classes.headingtoLogin}>
            Already A Member ? <span className={classes.toLogin} onClick={() => setSw(true)}>Login</span>
          </h4>
          <form className={classes.formSignup} action="">
            <label htmlFor="name">Name</label>
            <input className={classes.inputBoxes} id="name" type="text" placeholder="John Wick" />
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
              <NormalButton name="Signup" onClick={save}></NormalButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
