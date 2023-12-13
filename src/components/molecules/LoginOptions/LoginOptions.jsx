import React from "react";
import "./styles.css";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import { Link } from "react-router-dom";

const LoginOptions = () => {
  return (
    <div className="login-options">
      <Checkbox label="Remember me" />
      <Link to="/forgot-password">
        <Button variant="secondary">Forgot my password</Button>
      </Link>
    </div>
  );
};

export default LoginOptions;
