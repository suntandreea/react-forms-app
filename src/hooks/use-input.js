import {useState} from 'react';


const useInput = (validationType) => {

  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  let valueIsValid = false;
  switch (validationType) {
    case 'email':
      valueIsValid = /^[\w-\.+]+@([\w-]+\.)+[\w]{2,12}$/.test(enteredValue);
      break;
    case 'password' :
      valueIsValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d@$!%*?&]{8,}$/.test(enteredValue);
      break;
    default:
      valueIsValid = enteredValue.trim() !== '';
  }

  const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = event => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  };

};

export default useInput;