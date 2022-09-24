import React from "react";
import classes from "./Signup.module.css";
import Button from "./Button.js"

const Signup = () => {
  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.innerDiv}>
          <h1 className={classes.headingSignup}>Create New Account</h1>
          <h4 className={classes.headingtoLogin}>
            Already A Member ? <span className={classes.toLogin}>Sign Up</span>
          </h4>
          <form className={classes.formSignup} action="">
            <label htmlFor="name">Name</label>
            <input className={classes.inputBoxes} id="name" type="text" placeholder="John Wick" />
            <label htmlFor="email">E-mail</label>
            <input className={classes.inputBoxes} id="email" type="email" placeholder="johnwick@gmail.com" />
            <label htmlFor="password">Password</label>
            <input className={classes.inputBoxes} id="password" type="password" />
            <div className={classes.divButtons}>
                <input type="radio" name="Mess" id="radio1" />
                <label for="radio1">Mess</label>
                <input type="radio" name="User" id="radio2" />
                <label for="radio2">User</label>
            </div>
            <Button name="Signup"></Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
