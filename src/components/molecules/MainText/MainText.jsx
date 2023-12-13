import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const MainText = ({ h2Text, h3Text }) => {
  return (
    <div className="greeting-text">
      <h2>{h2Text}</h2>
      <h3>{h3Text}</h3>
    </div>
  );
};

MainText.propTypes = {
  h2Text: PropTypes.string.isRequired,
  h3Text: PropTypes.string.isRequired,
};

export default MainText;
