import React from "react";
import "./styles.css";
import MainText from "../../molecules/MainText/MainText";
import { Wrapper, Copyright } from "../../atoms";
import ResetPasswordForm from "../ResetPasswordForm/ResetPasswordForm";

const ResetPassword = () => {
  const supportEmail = "support@harpia.com";

  return (
    <div className="left-container">
      <Wrapper className="login-container">
        <Wrapper>
          <MainText
            h2Text="Forgot password"
            h3Text="Enter your email to receive the password reset link"
          />
          <ResetPasswordForm />
        </Wrapper>
        <div className="info">
          <a href={`mailto:${supportEmail}`} className="email-suport">
            {supportEmail}
          </a>
          <Copyright />
        </div>
      </Wrapper>
    </div>
  );
};

export default ResetPassword;
