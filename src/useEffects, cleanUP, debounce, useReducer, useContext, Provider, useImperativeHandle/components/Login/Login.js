import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import LoginInput from '../LoginInput/LoginInput';

const emailReducer = (state, action) => {
  if (action.type === 'ONCHANGE_INPUT') {
    return { 
      value: action.value,
      isValid: action.value.includes('@'),
    };
  }
  if (action.type === 'ON_INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return {
    value: 'initial_state',
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === 'ONCHANGE_INPUT') {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === 'ON_INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: 'initial_state',
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: false,
  });

  // useEffect(() => {
  //   console.log('EFFECT RUNS');

  //   return () => {
  //     console.log('EFFECT CLEANUP FUNCTION');
  //   };
  // }, []);
  const { isValid: isEmailValid } = emailState;
  // const { isValid: isPasswordValid } = passwordState;  //you can destructure but do not have to

  const ctx = useContext(AuthContext);

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  useEffect(() => {
    const validityCheck = setTimeout(() => {
      console.log(
        'Checking for validity, after last input keystroke wait 1000ms and then execute the validating function!!'
      );

      setFormIsValid(
        //  ("dummy validation");
        isEmailValid && passwordState.isValid
      );
    }, 1000);

    return () => {
      console.log(
        'CLEAN UP function on return, resetting the setTimeout timer using clearTimeout()'
      );

      clearTimeout(validityCheck);
    };
  }, [isEmailValid, passwordState.isValid]);
  //   console.log(`enteredEmail, enteredPassword are the values that being 'watched' by useEffect,
  // useEffect executes ONLY if these values change!  `)

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'ONCHANGE_INPUT', value: event.target.value });

    // setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'ONCHANGE_INPUT', value: event.target.value });

    // setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'ON_INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'ON_INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
    ctx.onLogin(emailState.value, passwordState.value);
    } else if (!isEmailValid) {
 emailInputRef.current.focus()
    } else {
passwordInputRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <LoginInput
          ref={emailInputRef}
          isValid={emailState.isValid}
          labelName='E-MAIL'
          type='email'
          id='email'
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <LoginInput
          ref={passwordInputRef}
          isValid={passwordState.isValid}
          labelName='PASSWORD'
          type='password'
          id='password'
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type='submit' className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
