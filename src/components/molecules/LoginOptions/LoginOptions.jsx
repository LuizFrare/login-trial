import React from "react";
import "./styles.css";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";

const LoginOptions = () => {
  return (
    <div className="login-options">
      <Checkbox label="Remember me" />
      <Button variant="secondary">Forgot my password</Button>
    </div>
  );
};

export default LoginOptions;
