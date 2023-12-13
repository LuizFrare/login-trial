import React from "react";
import "./styles.css";
import Copyright from "../../atoms/Copyright/Copyright";
import MainText from "../../molecules/MainText/MainText";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import ResetPasswordForm from "../ResetPasswordForm/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className="left-container">
      <Wrapper className="login-container">
        <Wrapper>
          <MainText h2Text="Forgot password" h3Text="Enter your email to receive the password reset link" />
          <ResetPasswordForm />
        </Wrapper>
        <Copyright />
      </Wrapper>
    </div>
  );
};

export default ResetPassword;
