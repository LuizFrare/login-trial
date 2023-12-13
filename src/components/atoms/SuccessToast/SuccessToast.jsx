import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import CloseIcon from "../../../assets/icons/CloseIcon";
import SuccessIcon from "../../../assets/icons/SuccessIcon";

const SuccessToast = ({ phrase, description, isVisible, setIsVisible }) => {
  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="success-toast">
      <div className="success-toast-wrapper">
        <SuccessIcon width={24} height={24} stroke="#34D399" />
        <div className="success-toast-message">
          <p className="success-toast-phrase">{phrase}</p>
          <p className="success-toast-description">{description}</p>
        </div>
      </div>
      <button className="close-error-message-box-button" onClick={handleClose}>
        <CloseIcon width={20} height={20} stroke="#E3E2E2" />
      </button>
    </div>
  ) : null;
};

SuccessToast.propTypes = {
  phrase: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

export default SuccessToast;
