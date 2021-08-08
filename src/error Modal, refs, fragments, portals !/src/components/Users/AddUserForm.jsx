import React, { useState, useRef } from 'react';
import Card from '../UI/Card.jsx';
import Button from '../UI/Button.jsx';
import styles from './AddUserForm.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUserForm = (props) => {
  const nameInput = useRef();
  const ageInput = useRef();

  // const [newUser, setNewUser] = useState({
  //   name: '',
  //   age: '',
  //   id: '',
  // });

  // const [isInputValid, setIsInputValid] = useState(true)
  const [error, setError] = useState();

  const submitUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredAge = ageInput.current.value;
    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
      return setError({
        title: 'Empty input error!',
        content: 'Please fill Username and Age with a proper values!',
      });
    }
    if (+enteredAge < 1) {
      return setError({
        title: 'Wrong age!',
        content: 'Please specify a valid age, greater than 0.',
      });
    }

    const newUser = {
      name: enteredName,
      age: enteredAge,
    };

    props.onAddUser(newUser);

    nameInput.current.value = '';
    ageInput.current.value = '';

    // setNewUser({
    //   name: '',
    //   age: '',
    //   id: '',
    // });
  };

  // const nameChangeHandler = (event) => {
  //   setNewUser((prevValue) => {
  //     return { ...prevValue, name: event.target.value };
  //   });
  // };

  // const ageChangeHandler = (event) => {
  //   setNewUser((prevValue) => {
  //     return { ...prevValue, age: event.target.value };
  //   });
  // };

  const onCloseModal = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onButtonClick={onCloseModal}
          title={error.title}
          content={error.content}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' ref={nameInput} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' min='0' max='10000' ref={ageInput} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUserForm;
