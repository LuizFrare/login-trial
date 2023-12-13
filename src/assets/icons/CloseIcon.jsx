import React from "react";
import PropTypes from "prop-types";

const CloseIcon = ({ stroke, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M5 15.5L15 5.5M5 5.5L15 15.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CloseIcon.propTypes = {
  stroke: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CloseIcon;
