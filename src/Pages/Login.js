import React from "react";
import "../Pages/Login.css";
const Login = () => {
  return (
    <div className="box">
      <form>
        <h2>Sign in</h2>
        <div className="inputBox">
          <input type="text" />
          <span>User name</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" />
          <span>password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot password</a>
          <a href="#"> Signup</a>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
    // fd fdfd fdf df
  );
};

export default Login;
