// /src/hooks/useEmailValidation.js

import { useState } from 'react';

const useEmailValidation = (initialValue = '') => {
  const [email, setEmail] = useState(initialValue);
  const [error, setError] = useState('');

  const validateEmail = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setError(isValid ? '' : 'Enter a valid email.');
    return isValid;
  };

  return { email, setEmail, error, validateEmail };
};

export default useEmailValidation;
