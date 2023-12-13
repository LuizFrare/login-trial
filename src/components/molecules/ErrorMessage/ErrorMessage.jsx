import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import CloseIcon from "../../../assets/icons/CloseIcon";
import WarningIcon from "../../../assets/icons/WarningIcon";

const ErrorMessage = ({ phrase }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

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
};

export default ErrorMessage;
