import React from "react";
import "./styles.css";
import LoginForm from "../../molecules/LoginForm/LoginForm";
import Copyright from "../../atoms/Copyright/Copyright";
import MainText from "../../molecules/MainText/MainText";
import Wrapper from "../../atoms/Wrapper/Wrapper";

const Login = () => {
  return (
    <div className="left-container">
      <Wrapper className="login-container">
        <Wrapper>
          <MainText h2Text="Welcome back" h3Text="to the Harpia SIEM!" />
          <LoginForm />
        </Wrapper>
        <Copyright />
      </Wrapper>
    </div>
  );
};

export default Login;
