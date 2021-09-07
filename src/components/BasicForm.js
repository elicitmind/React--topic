import useTraining from '../hooks/use-reducer-input';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  const {
    value: enteredName,
    hasError: isNameInvalid,
    isValid: isNameValid,
    onBlurHandler: nameOnBlurHandler,
    onChangeHandler: nameChangeHandler,
    resetInput: resetName,
  } = useTraining(isNotEmpty);

  const {
    value: enteredLastName,
    hasError: isLastNameInvalid,
    isValid: isLastNameValid,
    onBlurHandler: lastNameOnBlurHandler,
    onChangeHandler: lastNameChangeHandler,
    resetInput: resetLastName,
  } = useTraining(isNotEmpty);

  const {
    value: enteredEmail,
    hasError: isEmailInvalid,
    isValid: isEmailValid,
    onBlurHandler: emailOnBlurHandler,
    onChangeHandler: emailChangeHandler,
    resetInput: resetEmail,
  } = useTraining(isEmail);

  let formIsValid = false;

  formIsValid = isNameValid && isLastNameValid && isEmailValid;

  const onSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('SUBMITTER');
    console.log(enteredEmail, enteredName, enteredLastName);

    resetEmail();
    resetLastName();
    resetName();
  };

  const nameClass = !isNameInvalid ? 'form-control' : 'form-control invalid';
  const emailClass = !isEmailInvalid ? 'form-control' : 'form-control invalid';
  const lastNameClass = !isLastNameInvalid
    ? 'form-control'
    : 'form-control invalid';

  return (
    <form onSubmit={onSubmit}>
      <div className='control-group'>
        <div className={nameClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameOnBlurHandler}
          />
          {isNameInvalid && <p className='error-text'>enter name</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameOnBlurHandler}
          />
          {isLastNameInvalid && <p className='error-text'>enter last name</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailOnBlurHandler}
        />
        {isEmailInvalid && <p className='error-text'>enter valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
