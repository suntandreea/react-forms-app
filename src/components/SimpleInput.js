import {useState} from 'react';

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredMail, setEnteredMail] = useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredMailIsTouched, setEnteredMailIsTouched] = useState(false);


  const emailRegex = /^[\w-\.+]+@([\w-]+\.)+[\w]{2,12}$/;
  const enteredMailIsValid = emailRegex.test(enteredMail);
  const enteredNameIsValid = enteredName.trim() !== '';
  const mailInputIsInvalid = !enteredMailIsValid && enteredMailIsTouched;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const mailInputChangeHandler = event => {
    setEnteredMail(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameIsTouched(true);
  };

  const mailInputBlurHandler = event => {
    setEnteredMailIsTouched(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameIsTouched(true);
    setEnteredMailIsTouched(true);

    if (!enteredNameIsValid || !enteredMailIsValid) {
      return;
    }

    console.log(enteredName, " ", enteredMail);
    setEnteredName('');
    setEnteredMail('');
    setEnteredNameIsTouched(false);
    setEnteredMailIsTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const mailInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={mailInputClasses}>
        <label htmlFor='mail'>Your Email</label>
        <input value={enteredMail} type='email' id='mail' onChange={mailInputChangeHandler}
               onBlur={mailInputBlurHandler} />
        {mailInputIsInvalid && <p className="error-text">Mail must be valid.</p>}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onChange={nameInputChangeHandler}
               onBlur={nameInputBlurHandler} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
