import React from "react";
import "./styles.css";
import LoginForm from "../../molecules/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="left-container">
      <div className="login-container">
        <div className="wrapper">
          <div className="greeting-text">
            <h2>Welcome back</h2> <h3>to the Harpia SIEM!</h3>
          </div>
          <LoginForm />
        </div>
        <p className="copyright">
          © 2022 SafeLabs. All rights reserved. v2.0.0
        </p>
      </div>
    </div>
  );
};

export default Login;
