import React, { useState } from "react";
import "./styles.css";
import { Button, Input } from "../../atoms";
import LoginOptions from "../LoginOptions/LoginOptions";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import usePasswordValidation from "../../../hooks/usePasswordValidation";
import useEmailValidation from "../../../hooks/useEmailValidation";

const LoginForm = () => {
  const {
    email,
    setEmail,
    error: emailError,
    validateEmail,
  } = useEmailValidation();
  const {
    password,
    setPassword,
    error: passwordError,
    validatePassword,
  } = usePasswordValidation();
  const [validationError, setValidationError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const handleLogin = () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      setValidationError(false);
      setIsVisible(true);
    } else {
      setValidationError(true);
    }
  };

  return (
    <div className="login-form">
      <Input
        type="text"
        label="E-mail *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
        error={emailError}
      />
      <Input
        type="password"
        label="Senha *"
        value={password}
        isPassword
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Digite sua senha"
        error={passwordError}
      />
      {isVisible && (
        <ErrorMessage
          phrase="Login or password is invalid!"
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}
      <LoginOptions />
      <Button variant="primary" onClick={handleLogin}>
        Sign in
      </Button>
    </div>
  );
};

export default LoginForm;
