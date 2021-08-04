import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0 4px;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => props.invalid && 'red'};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
//     background-color: ${(props) => props.invalid && '#ffd7d7'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0.5rem 1.5rem;
//     border-radius: 10px 10px 0 0;

//     @media (min-width: 768px) {
//       border-radius: 5px;
//       margin: 0.5rem 0
//     }
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid input {
//     background-color: rgba(255, 0, 0, 0.637);
//     border-color: red;
//   }

//   &.invalid label {
//     color: rgb(206, 13, 13);
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInputValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsInputValid(false);
      return;
    }
    setIsInputValid(true);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isInputValid && styles.invalid}`}
        // className={!isInputValid && "invalid"}
        invalid={!isInputValid}
      >
        <label>Goals!</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
