import React from "react";
import "./styles.css";
import { Checkbox } from "../../atoms";
import { Link } from "react-router-dom";

const LoginOptions = () => {
  return (
    <div className="login-options">
      <Checkbox label="Remember me" />
      <Link to="/forgot-password" className="secondary">
      Forgot my password
      </Link>
    </div>
  );
};

export default LoginOptions;
