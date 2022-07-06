import useInput from '../hooks/use-input';

const BasicForm = (props) => {

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput();

  const {
    value: mailValue,
    isValid: mailIsValid,
    hasError: mailHasError,
    inputChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    reset: resetMail
  } = useInput('email');

  const {
    value: passValue,
    isValid: passIsValid,
    hasError: passHasError,
    inputChangeHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetPass
  } = useInput();

  let formIsValid = nameIsValid && mailIsValid && passIsValid;

  const submitHandler = () => {

    if (!formIsValid) {
      return;
    }

    resetName();
    resetMail();
    resetPass();

  };

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={`form-control ${nameHasError && 'invalid'}`}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' value={nameValue} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
          {nameHasError && <p className="error-text">Name cannot be empty.</p>}
        </div>
        <div className={`form-control ${mailHasError && 'invalid'}`}>
          <label htmlFor='mail'>E-Mail Address</label>
          <input type='email' id='mail' value={mailValue} onChange={mailChangeHandler} onBlur={mailBlurHandler}/>
          {mailHasError && <p className="error-text">Insert valid email.</p>}
        </div>
      </div>
      <div className={`form-control ${passHasError && 'invalid'}`}>
        <label htmlFor='pass'>Password</label>
        <input type='password' id='pass' value={passValue} onChange={passChangeHandler} onBlur={passBlurHandler}/>
        {passHasError && <p className="error-text">Insert valid password.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
