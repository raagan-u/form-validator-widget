import InputComponent from "./InputComponent";

const UsernameInput = (props: any) => {
  const validateUsername = (username: string) => {
    const usernameRegex = /^[a-zA-Z0-9_.]+$/;
    
    if (!username) {
      return 'Username is required';
    } else if (!usernameRegex.test(username)) {
      return 'Username can only contain letters, numbers, underscores, and periods';
    }
    
    return '';
  };

  return <InputComponent type="text" validate={validateUsername} {...props} />;
};

export default UsernameInput;
