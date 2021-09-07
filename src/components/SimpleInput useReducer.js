import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
//destructuring hooks to get the custom variable / function / boolean -pointer names
  const {
    value: enteredName,
    isValid: isEnteredNameValid,
    invalidInput: nameInputHasError,
    inputChangeHandler: enteredNameChangeHandler,
    inputLoseFocusHandler: nameInputOnBlurHandler,
    reset: resetNameInput,
  } 
//passing validation function
  = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: isEnteredEmailValid,
    invalidInput: emailInputHasError,
    inputChangeHandler: enteredEmailChangeHandler,
    inputLoseFocusHandler: emailInputOnBlurHandler,
    reset: resetEmailInput,
  } = useInput((inputValue) => inputValue.includes('@'));


  let isFormValid = false;
//check if both inputs are valid, validation value comes from hook's logic
  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  const submitHandler = (event) => {
//prevent rendering on  form submit
    event.preventDefault();
//clear the input, functions called in our custom hook
    resetNameInput();
    resetEmailInput();
  };

//conditional styles rendering upon validation!
  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your name</label>
        <input
          onChange={enteredNameChangeHandler}
          value={enteredName}
          type='text'
          placeholder='Please enter your name 🧙‍♂️'
          id='name'
          onBlur={nameInputOnBlurHandler}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must be provided 👑👑</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your email</label>
        <input
          onChange={enteredEmailChangeHandler}
          value={enteredEmail}
          type='email'
          placeholder='Please enter your email 🌐'
          id='email'
          onBlur={emailInputOnBlurHandler}
        />
        {emailInputHasError && (
          <p className='error-text'>Email must be valid 🏄‍♂️🏄‍♂️</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
