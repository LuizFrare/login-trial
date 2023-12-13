import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Checkbox = ({ label, customStyles }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container" style={customStyles}>
      <input
        type="checkbox"
        id="custom-checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="custom-checkbox">{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  customStyles: PropTypes.object,
};

export default Checkbox;
