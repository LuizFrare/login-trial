// /src/components/LoginForm.js

import React from "react";
import Input from "../../atoms/Input/Input";
import useEmailValidation from "../../../hooks/useEmailValidation";
import "./styles.css";
import Button from "../../atoms/Button/Button";

const ResetPasswordForm = () => {
  const {
    email,
    setEmail,
    error: emailError,
    validateEmail,
  } = useEmailValidation();

  const handleLogin = () => {
    const isEmailValid = validateEmail();
    if (isEmailValid) {
      console.log(
        "Login bem-sucedido. Redirecionar para a página de perfil do usuário."
      );
    } else {
      console.log("Login falhou.");
    }
  };

  return (
    <div className="reset-password-form">
      <Input
        type="text"
        label="E-mail *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
        error={emailError}
      />
      <Button variant="primary" onClick={handleLogin}>
        Request
      </Button>
    </div>
  );
};

export default ResetPasswordForm;
