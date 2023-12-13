import React, { useState } from "react";
import useEmailValidation from "../../../hooks/useEmailValidation";
import "./styles.css";
import { SuccessToast, Button, Input } from "../../atoms";

const ResetPasswordForm = () => {
  const {
    email,
    setEmail,
    error: emailError,
    validateEmail,
  } = useEmailValidation();
  const [showToast, setShowToast] = useState(false);

  const handleLogin = () => {
    const isEmailValid = validateEmail();
    if (isEmailValid) {
      setShowToast(true);
    } else {
      setShowToast(false);
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
      {showToast ? (
        <SuccessToast
          phrase="Request successful!"
          description="A new link has been sent to your email."
          isVisible={showToast}
          setIsVisible={setShowToast}
        />
      ) : null}
    </div>
  );
};

export default ResetPasswordForm;
