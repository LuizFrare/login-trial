// /src/components/Input.js

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import EyeIcon from "../../../assets/icons/EyeIcon";
import OpenEyeIcon from "../../../assets/icons/OpenEyeIcon";

const Input = ({ type, label, value, onChange, placeholder, isPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleKeyDown = (e) => {
    if (isPassword && e.key === "Enter") {
      handleTogglePassword();
    }
  };

  const passwordIcon = showPassword ? (
    <EyeIcon fill="#BCBCBC" width="20" height="20" />
  ) : (
    <OpenEyeIcon fill="#BCBCBC" width="20" height="20" />
  );

  return (
    <div className="input-container">
      <label>{label}</label>
      <div className="input-wrapper">
        <input
          type={isPassword && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="input-atom"
        />
        {isPassword && (
          <button
            className={`eye-icon ${showPassword ? "visible" : ""}`}
            onClick={handleTogglePassword}
            onKeyDown={handleKeyDown}
            aria-label="Toggle Password Visibility"
          >{passwordIcon}</button>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  isPassword: PropTypes.bool,
};

export default Input;
