// /src/components/Input.js

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

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

  return (
    <div className="input-container">
      <label>{label}</label>
      <div className="input-wrapper">
        <input
          type={isPassword && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {isPassword && (
          <button
            className={`eye-icon ${showPassword ? "visible" : ""}`}
            onClick={handleTogglePassword}
            onKeyDown={handleKeyDown}
            aria-label="Toggle Password Visibility"
          >
            👁️
          </button>
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
