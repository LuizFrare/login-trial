// /src/components/LoginForm.js

import React from "react";
import Input from "../../atoms/Input/Input";
import useEmailValidation from "../../../hooks/useEmailValidation";
import usePasswordValidation from "../../../hooks/usePasswordValidation";

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

  const handleLogin = () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      console.log(
        "Login bem-sucedido. Redirecionar para a página de perfil do usuário."
      );
    }
  };

  const handleForgotPassword = () => {
    console.log("Mudar opções conforme o protótipo.");
  };

  const handleResetPassword = () => {
    const isEmailValid = validateEmail();

    if (isEmailValid) {
      console.log("Solicitação de redefinição de senha bem-sucedida.");
    }
  };

  return (
    <div className="login-form">
      <Input
        type="text"
        label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
        error={emailError}
      />

      <Input
        type="password"
        label="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Digite sua senha"
        error={passwordError}
      />

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleForgotPassword}>Forgot my password</button>
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default LoginForm;
