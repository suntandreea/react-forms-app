import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredMail,
    isValid: mailIsValid,
    hasError: mailHasError,
    inputChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    reset: resetMail
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if (nameIsValid && mailIsValid) {
    formIsValid = true;
  }


  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!nameIsValid || !mailIsValid) {
      return;
    }

    resetName();
    resetMail();
  };

  const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control';
  const mailInputClasses = mailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={mailInputClasses}>
        <label htmlFor='mail'>Your Email</label>
        <input value={enteredMail} type='email' id='mail' onChange={mailChangeHandler}
               onBlur={mailBlurHandler} />
        {mailHasError && <p className="error-text">Mail must be valid.</p>}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onChange={nameChangeHandler}
               onBlur={nameBlurHandler} />
        {nameHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
