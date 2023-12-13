import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import CloseIcon from "../../../assets/icons/CloseIcon";
import WarningIcon from "../../../assets/icons/WarningIcon";

const ErrorMessage = ({ phrase, isVisible, setIsVisible }) => {
  const handleClose = () => {
    setIsVisible(false);
  };
  console.log(isVisible);

  return isVisible ? (
    <div className="error-message-box">
      <div className="message-warning">
        <WarningIcon width={24} height={24} stroke="#F87171" />
        <p className="error-message-box-phrase">{phrase}</p>
      </div>
      <button className="close-error-message-box-button" onClick={handleClose}>
        <CloseIcon width={20} height={20} stroke="#E3E2E2" />
      </button>
    </div>
  ) : null;
};

ErrorMessage.propTypes = {
  phrase: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

export default ErrorMessage;
