import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    console.log(action);
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
		console.log(action)
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
		console.log(action)
		return { value: '', isTouched: false}
  }
  return initialInputState;
};

const useTraining = (validateMethod) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isEnteredValueValid = validateMethod(inputState.value);
  const hasError = inputState.isTouched && !isEnteredValueValid;

  const onChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const onBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: isEnteredValueValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    resetInput: reset,
  };
};

export default useTraining;
