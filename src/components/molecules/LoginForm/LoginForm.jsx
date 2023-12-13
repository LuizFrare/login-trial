// /src/components/LoginForm.js

import React, { useState } from "react";
import Input from "../../atoms/Input/Input";
import useEmailValidation from "../../../hooks/useEmailValidation";
import usePasswordValidation from "../../../hooks/usePasswordValidation";
import "./styles.css";
import Button from "../../atoms/Button/Button";
import LoginOptions from "../LoginOptions/LoginOptions";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

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

  const handleLogin = () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      console.log(
        "Login bem-sucedido. Redirecionar para a página de perfil do usuário."
      );
      setValidationError(false);
    } else {
      console.log("Login falhou.");
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
      {validationError && <ErrorMessage phrase="Login or password is invalid!" />}
      <LoginOptions />
      <Button variant="primary" onClick={handleLogin}>
        Sign in
      </Button>
    </div>
  );
};

export default LoginForm;
