import React from "react";
import "./styles.css";
import { Button, Checkbox } from "../../atoms";
import { Link } from "react-router-dom";

const LoginOptions = () => {
  return (
    <div className="login-options">
      <Checkbox label="Remember me" />
      <Link to="/forgot-password">
        <Button type="button" variant="secondary">Forgot my password</Button>
      </Link>
    </div>
  );
};

export default LoginOptions;
