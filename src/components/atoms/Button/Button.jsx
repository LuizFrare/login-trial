import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";

const Button = ({ variant, children, onClick }) => {
  const buttonClass = `button ${variant}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
 
Button.defaultProps = {
  variant: 'primary',
  onClick: () => {},
};

export default Button;
