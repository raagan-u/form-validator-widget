import { useState, useEffect } from "react";
import React from "react";
import { sanitizeInput } from "../utils/sanitizeInput";
import useDebounce from "../utils/useDebounce";

interface InputProps {
  type: string;
  validate?: (value: string) => string;
  value?: string; // Ensure value is a required prop
  debounce?: boolean;
  debounceDelay?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Ensure onChange is defined
  [key: string]: any;
}

const InputComponent = ({
  type,
  validate,
  onChange,
  debounce,
  debounceDelay,
  value,
  ...props
}: InputProps) => {
  const [error, setError] = useState("");

  // Get the debounced value
  const debouncedValue = useDebounce(value, debounce ? debounceDelay || 300 : 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const sanitizedValue = sanitizeInput(rawValue);
	e.target.value= sanitizedValue;

    if (validate) {
      const validationError = validate(sanitizedValue);
      setError(validationError || "");
    }
	if (onChange) onChange(e);
  };

  // Use the debounced value for actions, like API calls or validation
  useEffect(() => {
    if (debouncedValue) {
      // Example: Call a function to fetch data or validate after a delay
      // fetchData(debouncedValue); // Uncomment this if you have a fetch function
      // or perform some other action with the debounced value
    }
  }, [debouncedValue]); // Only runs when debouncedValue changes

  return (
    <div>
      <input type={type} value={value} onChange={handleChange} {...props} />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default InputComponent;
