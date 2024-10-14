// EmailInput.tsx
import InputComponent from "./InputComponent";

const EmailInput = (props: any) => {
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      return 'Email is required';
    } else if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    
    return '';
  };

  return <InputComponent type="email" validate={validateEmail} {...props} />;
};

export default EmailInput;
