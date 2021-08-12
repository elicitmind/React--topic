import React, { useRef, useImperativeHandle} from 'react';
import classes from './LoginInput.module.css';

const LoginInput = React.forwardRef((props, ref) => {
const inputRef = useRef()

const activateFocus = () => {
  console.log(inputRef.current)
  inputRef.current.focus()
}

useImperativeHandle(ref, ()=>{
  return {
    focus: activateFocus
  }
})

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.labelName}</label>
      <input
      ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default LoginInput;
