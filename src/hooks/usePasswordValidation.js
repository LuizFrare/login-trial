// /src/hooks/usePasswordValidation.js

import { useState } from 'react';

const usePasswordValidation = (initialValue = '') => {
  const [password, setPassword] = useState(initialValue);
  const [error, setError] = useState('');

  const validatePassword = () => {
    const isValid = password.length >= 6;
    setError(isValid ? '' : 'Enter a valid password.');
    return isValid;
  };

  return { password, setPassword, error, validatePassword };
};

export default usePasswordValidation;
