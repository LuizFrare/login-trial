// /src/hooks/useEmailValidation.js

import { useState } from 'react';

const useEmailValidation = (initialValue = '') => {
  const [email, setEmail] = useState(initialValue);
  const [error, setError] = useState('');

  const validateEmail = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setError(isValid ? '' : 'E-mail inválido');
    return isValid;
  };

  return { email, setEmail, error, validateEmail };
};

export default useEmailValidation;
