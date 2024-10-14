# My React Components Library

  

A collection of reusable React components and utilities designed to streamline form handling and validation.

  

## Table of Contents

  

- [Components](#components)

- [1. InputComponent](#1-inputcomponent)

- [2. EmailInput](#2-emailinput)

- [3. PasswordInput](#3-passwordinput)

- [4. UsernameInput](#4-usernameinput)

- [5. DateInput](#5-dateinput)

- [6. FileInput](#6-fileinput)

- [7. RadioButton](#7-radiobutton)

- [8. FormComponent](#8-formcomponent)

- [Utilities](#utilities)

- [1. sanitizeInput](#1-sanitizeinput)

- [2. useDebounce](#2-usedebounce)

- [3. validatePassword](#3-validatepassword)

- [Sample Code for Sign-Up and Login Forms](#sample-code-for-sign-up-and-login-forms)

- [Sign-Up Form](#sign-up-form)

- [Login Form](#login-form)

  

---

  

## Components

  
### 1. InputComponent

  

  

**Description**: A reusable input component that can handle various input types and supports validation.

  

  

**Props**:

  

-  `type`: The type of input (e.g., "text", "email", "password").

  

-  `validate`: A function to validate the input value and return an error message.

  

-  `value`: The controlled value from the parent component.

  

-  `debounce`: Optional boolean to enable debouncing for the input value.

  

-  `debounceDelay`: Optional delay in milliseconds for the debouncing effect.

  

-  `onChange`: A callback function that is called when the input value changes.

  

  

**Usage**:

  

```jsx

  

<InputComponent

  

type="text"

  

value={username}

  

onChange={(e) =>  setUsername(e.target.value)}

  

validate={validateUsername}

  

/>

```
### 2. EmailInput

  

  

**Description**: A specialized input component for email addresses.

  

  

**Props**:

  

-  `name`: The name of the input field.

  

-  `value`: The controlled value from the parent component.

  

-  `onChange`: A callback function that is called when the input value changes.

  

  

**Usage**:

  

```jsx

  

<EmailInput

  

name="email"

  

value={email}

  

onChange={(e) =>  setEmail(e.target.value)}

  

/>```

  

```

  

### 3. PasswordInput

  

  

**Description**: A specialized input component for passwords.

  

  

**Props**:

  

-  **name**: The name of the input field.

  

-  **value**: The controlled value from the parent component.

  

-  **onChange**: A callback function that is called when the input value changes.

  

-  **validate**: A function to validate the password value and return an error message.

  

  

**Usage**:

  

  

```jsx

  

<PasswordInput

  

name="password"

  

value={password}

  

onChange={(e) =>  setPassword(e.target.value)}

  

validate={validatePassword}

  

/>  ```

  

```

  

### 4. UsernameInput

  

  

**Description**: An input component for capturing usernames with validation.

  

  

**Props**:

  

-  **name**: The name of the input field.

  

-  **value**: The controlled value from the parent component.

  

-  **onChange**: A callback function that is called when the input value changes.

  

-  **validate**: A function to validate the username value and return an error message.

  

  

**Usage**:

  

  

jsx
```
  

<UsernameInput

  

name="username"

  

value={username}

  

onChange={(e) =>  setUsername(e.target.value)}

  

/>

```

### 5. DateInput

  

  

**Description**: A specialized input component for selecting dates, with options to restrict date ranges and disable specific days.

  

  

**Props**:

  

-  **minDate**: (optional) A string representing the minimum selectable date in the format YYYY-MM-DD.

  

-  **maxDate**: (optional) A string representing the maximum selectable date in the format YYYY-MM-DD.

  

-  **value**: A string representing the controlled value from the parent component.

  

-  **label**: (optional) A custom label for the input.

  

-  **disabledDays**: (optional) A function that takes a date and returns true for days that should be disabled.

  

-  **onDateChange**: A callback function that is called when the selected date changes.

  

-  **name**: A string representing the name of the input field.

  

  

**Usage**:

  

  

```jsx

  

<DateInput

  

minDate="2024-01-01"

  

maxDate="2024-12-31"

  

value={selectedDate}

  

label="Select a Date"

  

disabledDays={(date) => date.getDay() ===  0}  // Disable Sundays

  

onDateChange={(date) =>  setSelectedDate(date)}

  

name="date"

  

/>
```
### 6. FileInput

**Description**: A customizable file input component that allows users to select files from their device. It supports various file types based on the `accept` prop.

**Props**:
- **accept** (optional): A string specifying the types of files that the input should accept (e.g., "image/*" for images, ".pdf" for PDF files).
- **onChange**: A callback function that is called when the selected files change. It receives the `FileList` or `null` if no files are selected.
- **[key: string]**: Any additional props that can be passed to the input element.

**Usage**:

```jsx
import FileInput from './FileInput';

const MyComponent = () => {
  const handleFileChange = (files) => {
    if (files) {
      console.log(files[0]); // Access the selected file
    }
  };

  return (
    <div>
      <FileInput
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

```
### 7. RadioButton

  

  

**Description**: A component that renders a group of radio buttons for selecting one option from a set.

  

  

**Props**:

  

-  **options**: An array of objects, each containing a `value` and `label` for the radio button.

  

-  **selectedValue**: The currently selected value.

  

-  **onChange**: A callback function that is called when the selected value changes.

  

-  **name**: The name attribute for the radio button group.

  

  

**Usage**:

  

  

```jsx

  

<RadioButton

  

options={[

  

{ value:  'option1', label:  'Option 1' },

  

{ value:  'option2', label:  'Option 2' },

  

]}

  

selectedValue={selectedOption}

  

onChange={(e) =>  setSelectedOption(e.target.value)}

  

name="example"

  

/>

  

```
  

### 8. FormComponent

  

  

**Description**: A customizable form component that handles submission and collects input data from its children.

  

  

**Props**:

  

-  **onSubmit**: A callback function that is called when the form is submitted, receiving the form data.

  

-  **children**: The input components to be rendered within the form.

  

-  **className**: Optional CSS class for styling the form.

  

  

**Usage**:

  

  

```jsx

  

<FormComponent  onSubmit={(data) => console.log(data)}>

  

<UsernameInput  name="username"  value={username}  onChange={setUsername}  />

  

<PasswordInput  name="password"  value={password}  onChange={setPassword}  validate={validatePassword}  />

  

<button  type="submit">Submit</button>

  

</FormComponent>
```
  
  

  
  

  

  
  
  

  

## Utilities

  

  

### 1. sanitizeInput

  

  

**Description**: Sanitizes input to prevent XSS attacks by replacing certain characters with their corresponding HTML entities.

  

  

**Usage**:

  

  

```typescript

  

import { sanitizeInput } from  '../utils/sanitizeInput';

  

  

const safeInput =  sanitizeInput(userInput);

  

```

  

  

### 2. useDebounce

  

  

**Description**: A custom hook that debounces a value, returning a debounced version of the input. This is useful for scenarios where you want to delay a state update until after a specified amount of time has passed since the last change. It helps to optimize performance by reducing the number of updates or API calls made during rapid state changes.

  

  

**Props**:

  

-  **value**: The value to be debounced.

  

-  **delay**: The amount of time (in milliseconds) to wait before updating the value.

  

  

**Usage**:

  

  

```typescript

  

import { useState } from  'react';

  

import useDebounce from  '../utils/useDebounce';

  

  

const  MyComponent  = () => {

  

const [inputValue, setInputValue] =  useState('');

  

const debouncedValue =  useDebounce(inputValue,  300);

  

  

const  handleChange  = (e:  React.ChangeEvent<HTMLInputElement>) => {

  

setInputValue(e.target.value);

  

};

  

  

return (

  

<input

  

type="text"

  

value={inputValue}

  

onChange={handleChange}

  

placeholder="Type something..."

  

/>

  

);

  

};

  

```

  

  

### 3. validatePassword

  

  

**Description**: A utility function to validate password strength based on specific criteria. This function checks if a password meets the defined requirements for length, character diversity, and complexity.

  

  

**Parameters**:

  

-  **password**: A string representing the password to be validated.

  

  

**Returns**: A string containing an error message if the password is invalid; otherwise, an empty string.

  

  

**Validation Criteria**:

  

- Minimum length of 8 characters.

  

- At least one uppercase letter.

  

- At least one lowercase letter.

  

- At least one number.

  

- At least one special character.

  

  

**Usage**:

  

  

```typescript

  

import { validatePassword } from  '../utils/validatePassword';

  

  

const  MyComponent  = () => {

  

const [password, setPassword] =  useState('');

  

const errorMessage =  validatePassword(password);

  

  

return (

  

<div>

  

<input

  

type="password"

  

value={password}

  

onChange={(e) => setPassword(e.target.value)}

  

placeholder="Enter your password"

  

/>

  

{errorMessage && <div style={{ color:  'red' }}>{errorMessage}</div>}

  

</div>

  

);

  

};

  

```
## Sample Code for Sign-Up and Login Forms

This section demonstrates how to use the components created for implementing Sign-Up and Login forms.

### Sign-Up Form

The Sign-Up form collects user information, including username, email, password, and date of birth.

```jsx
import React, { useState } from 'react';
import FormComponent from './FormComponent';
import UsernameInput from './UsernameInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import DateInput from './DateInput';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');

  const handleSignUp = (data) => {
    console.log('Sign-Up Data:', data);
  };

  return (
    <FormComponent onSubmit={handleSignUp}>
      <UsernameInput 
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <EmailInput 
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput 
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <DateInput 
        name="dob"
        value={dob}
        onDateChange={setDob}
        label="Date of Birth"
        minDate="1900-01-01"
        maxDate={new Date().toISOString().split('T')[0]} // today's date
      />
      <button type="submit">Sign Up</button>
    </FormComponent>
  );
};

export default SignUpForm;
```
## Sample Code for Login Form

This section demonstrates how to use the components created for implementing a Login form.

### Login Form

The Login form allows users to enter their username and password to gain access to their account.

```jsx
import React, { useState } from 'react';
import FormComponent from './FormComponent';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (data) => {
    console.log('Login Data:', data);
  };

  return (
    <FormComponent onSubmit={handleLogin}>
      <UsernameInput 
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <PasswordInput 
        name="password"
        value={password}
        onChange={(e) => setP
