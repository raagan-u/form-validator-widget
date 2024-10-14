import InputComponent from "./InputComponent";


interface PasswordInputProps {
  [key: string]: any;
}

const PasswordInput = ({ validate, ...props }: PasswordInputProps) => {
  
  return (
    <div>
      <InputComponent
        type="password"
        validate={validate}
        {...props}
      />
    </div>
  );
};

export default PasswordInput;
