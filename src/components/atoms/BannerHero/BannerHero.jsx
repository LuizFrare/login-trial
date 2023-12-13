import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const BannerHero = ({ children }) => {
  return (
    <div className="right-container">
      {children && (
        <div className="image-container">
          {children}
        </div>
      )}
    </div>
  );
};

BannerHero.propTypes = {
  children: PropTypes.node,
};

export default BannerHero;
