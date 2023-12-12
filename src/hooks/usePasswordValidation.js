// /src/hooks/usePasswordValidation.js

import { useState } from 'react';

const usePasswordValidation = (initialValue = '') => {
  const [password, setPassword] = useState(initialValue);
  const [error, setError] = useState('');

  const validatePassword = () => {
    const isValid = password.length >= 6;
    setError(isValid ? '' : 'Senha inválida (mínimo 6 caracteres)');
    return isValid;
  };

  return { password, setPassword, error, validatePassword };
};

export default usePasswordValidation;
