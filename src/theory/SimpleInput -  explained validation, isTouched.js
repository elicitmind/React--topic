import { useRef, useState, useEffect } from 'react';

const SimpleInput = (props) => {
//state to keep the entered data
  const [enteredName, setEnteredName] = useState('');

//state to control input value
  const [enteredValue, setEnteredValue] = useState('');

//input value focused state
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(false);

//state that is responsible for informing if there was first submit on the form
  const [isNameInputTouched, setIsNameInputTouched] = useState(false)

//useRef to read the inputs value
  const nameInputRef = useRef();


  const submitHandler = (event) => {
//prevent rendering on  form submit
    event.preventDefault();
//touched state to true to let app know that there already was a submit attempt 
    setIsNameInputTouched(true)
//simple validation if the submitted input is empty
    if (nameInputRef.current.value.trim() === '') {
//failed validation state change and return
      setIsEnteredNameValid(false);
      return;
    }
//passed validation state change
    setIsEnteredNameValid(true);
//store the input value
    setEnteredName(nameInputRef.current.value);
//clear the input
    setEnteredValue('');
  };

  const nameInputChangeHandler = (event) => {
//control the value of input
    setEnteredValue(event.target.value);
//user interacts with input as it is triggered onChange, i want valid state
    setIsEnteredNameValid(true);
  };

//boolean to notify if there is an invalid input submission after user already interacted with the app
  const isNameInputInvalid = isNameInputTouched && !isEnteredNameValid
//conditional styles rendering upon validation!
  const nameInputClasses = isNameInputInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your name</label>
        <input
          onChange={nameInputChangeHandler}
          ref={nameInputRef}
          value={enteredValue}
          type='text'
          placeholder='Please enter your name 🧙‍♂️'
          autoFocus={true}
          id='name'
        />
        {isNameInputInvalid && (
          <p className='error-text'>Name must be provided 👑👑</p>
        )}
      </div>
      <div className='form-actions'>
        <button>{enteredName ? enteredName : 'submit'}</button>
      </div>
    </form>
  );
};

export default SimpleInput;
