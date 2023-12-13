import React from "react";
import PropTypes from "prop-types";

const WarningIcon = ({ stroke, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M12 9.5V11.5M12 15.5H12.01M5.07183 19.5H18.9282C20.4678 19.5 21.4301 17.8333 20.6603 16.5L13.7321 4.5C12.9623 3.16667 11.0378 3.16667 10.268 4.5L3.33978 16.5C2.56998 17.8333 3.53223 19.5 5.07183 19.5Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

WarningIcon.propTypes = {
  stroke: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default WarningIcon;
