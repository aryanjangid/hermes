import React from "react";
import classes from "./Signup.module.css";

const Signup = () => {
  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.innerDiv}>
          <h2>Create New Account</h2>
          <h4>
            Already A Member ? <span>Sign Up</span>
          </h4>
          <form action="">
            <div className={classes.nameDiv}>
              <input type="text" placeholder="John" />
              <input type="text" placeholder="Wick" />
            </div>
            <input type="email" placeholder="johnwick@gmail.com" />
            <input type="password" />
            <div className={classes.divButtons}>
              <input type="button" value="Mess" />
              <input type="button" value="User" />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
