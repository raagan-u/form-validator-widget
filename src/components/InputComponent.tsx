import { useState } from "react";
import React from "react";
import { sanitizeInput } from "../utils/sanitizeInput";

interface InputProps {
	type: string;
	validate?: (value: string) => string;
	[key: string]: any;
}

const InputComponent = ({type, validate, onChange, ...props}: InputProps) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const sanitizedValue = sanitizeInput(rawValue);
	setValue(sanitizedValue);
	e.target.value = sanitizedValue;
	
	if (onChange) onChange(e);

    // Perform validation (custom or default)
    if (validate) {
      const validationError = validate(sanitizedValue);
      setError(validationError || '');
    }
  };
	return (
		<div>
		<input type={type} value={value} onChange={handleChange} {...props}/>
		{error && <div style={{ color: 'red' }}>{error}</div>}
		</div>
	)
}

export default InputComponent