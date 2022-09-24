import React from "react";
import classes from "./Signup.module.css";
import Button from "./Button.js"

const Signup = () => {
  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.innerDiv}>
          <h2>Create New Account</h2>
          <h4>
            Already A Member ? <span>Sign Up</span>
          </h4>
          <form className={classes.formSignup} action="">
            <input className="inputBox" type="text" placeholder="John Wick" />
            <input className="inputBox" type="email" placeholder="johnwick@gmail.com" />
            <input className="inputBox" type="password" />
            <div className={classes.divButtons}>
                <Button name="Mess"></Button>
                <Button name="User"></Button>
            </div>
            <Button name="Signup"></Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
