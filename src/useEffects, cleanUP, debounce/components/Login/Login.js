import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(()=>{
    console.log("EFFECT RUNS")

    return ()=>{
      console.log("EFFECT CLEANUP FUNCTION")
    }
  }, [])

  useEffect(()=>{
    const validityCheck = setTimeout(() => {

      console.log("Checking for validity, after last input keystroke wait 1000ms and then execute the validating function!!")

      setFormIsValid(

        //  ("dummy validation");

        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      )
        setPasswordIsValid(enteredPassword.trim().length > 6)
        setEmailIsValid(enteredEmail.includes('@'))
      
    }, 1000);

    return () => {

      console.log("CLEAN UP function on return, resetting the setTimeout timer using clearTimeout()")

      clearTimeout(validityCheck)
    }
  }, [enteredEmail, enteredPassword]); 
  
  // console.log(`enteredEmail, enteredPassword are the values that being 'watched' by useEffect,
  //                                                 useEffect executes ONLY if these values change!  `) 

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
