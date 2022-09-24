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
            Already A Member ? <span>Sign Up</span>
          </h4>
          <form className={classes.formSignup} action="">
            <input className="inputBox" type="text" placeholder="John Wick" />
            <input className="inputBox" type="email" placeholder="johnwick@gmail.com" />
            <input className="inputBox" type="password" />
            <div className={classes.divButtons}>
                <input type="radio" name="Mess" id="" />
                <input type="radio" name="User" id="" />
            </div>
            <Button name="Signup"></Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
