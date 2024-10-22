import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">Connect with friends</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="LoginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a new Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
