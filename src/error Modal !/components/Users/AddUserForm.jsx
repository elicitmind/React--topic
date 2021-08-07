import React, { useState } from 'react';
import Card from '../UI/Card.jsx';
import Button from '../UI/Button.jsx';
import styles from './AddUserForm.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUserForm = (props) => {
  const [newUser, setNewUser] = useState({
    name: '',
    age: '',
    id: '',
  });

  // const [isInputValid, setIsInputValid] = useState(true)
  const [error, setError] = useState();

  const submitUserHandler = (event) => {
    event.preventDefault();
    if (newUser.age.trim().length === 0 || newUser.name.trim().length === 0) {
      return setError({
        title: 'Empty input error!',
        content: 'Please fill Username and Age with a proper values!',
      });
    }
    if (+newUser.age < 1) {
      return setError({
        title: 'Wrong age!',
        content: 'Please specify a valid age, greater than 0.',
      });
    }

    props.onAddUser(newUser);

    setNewUser({
      name: '',
      age: '',
      id: '',
    });
  };

  const nameChangeHandler = (event) => {
    setNewUser((prevValue) => {
      return { ...prevValue, name: event.target.value };
    });
  };

  const ageChangeHandler = (event) => {
    setNewUser((prevValue) => {
      return { ...prevValue, age: event.target.value };
    });
  };

  const onCloseModal = () => {
    setError(null);
  };

  return (
    <div>
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
          <input
            id='username'
            type='text'
            onChange={nameChangeHandler}
            value={newUser.name}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            min='0'
            max='10000'
            onChange={ageChangeHandler}
            value={newUser.age}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUserForm;
