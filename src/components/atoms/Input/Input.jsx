import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import EyeIcon from "../../../assets/icons/EyeIcon";
import OpenEyeIcon from "../../../assets/icons/OpenEyeIcon";

const Input = ({ type, label, value, onChange, placeholder, isPassword, error, success }) => {
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

  const inputClassName = `input-atom ${error ? "error" : ""} ${success ? "success" : ""}`;

  return (
    <div className="input-container">
      <label className="label-atom">{label}</label>
      <div className="input-wrapper">
        <input
          type={isPassword && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClassName}
        />
        {isPassword && (
          <button
            className={`eye-icon ${showPassword ? "visible" : ""}`}
            onClick={handleTogglePassword}
            onKeyDown={handleKeyDown}
            aria-label="Toggle Password Visibility"
            type="button"
          >{passwordIcon}</button>
        )}
      </div>
      {error && <span className="error-message">{error}</span>}
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
  error: PropTypes.string,
  success: PropTypes.string,
};

export default Input;
