import React, { useState } from "react";
import { sanitizeInput } from "../utils/sanitizeInput";

interface PasswordInputProps {
  validate?: (value: string) => string;
  [key: string]: any; // Additional props
}

const PasswordInput = ({ validate, ...props }: PasswordInputProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle password change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawPassword = e.target.value;

    // Sanitize the input value
    const sanitizedPassword = sanitizeInput(rawPassword);
    setPassword(sanitizedPassword);

    // Perform validation if provided
    if (validate) {
      const validationError = validate(sanitizedPassword);
      setError(validationError || "");
    }
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        {...props} // Additional props like name, placeholder, etc.
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default PasswordInput;
