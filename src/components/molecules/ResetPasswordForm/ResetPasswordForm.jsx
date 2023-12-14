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

  const handleResetPassword = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    if (isEmailValid) {
      setShowToast(true);
    } else {
      setShowToast(false);
    }
  };

  return (
    <form className="reset-password-form" onSubmit={handleResetPassword}>
      <Input
        type="text"
        label="E-mail *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
        error={emailError}
      />
      <Button type="submit" variant="primary">
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
    </form>
  );
};

export default ResetPasswordForm;
