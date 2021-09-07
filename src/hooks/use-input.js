import { useState} from 'react'

//ALL THE REUSABLE LOGIC IS HERE ///////////////////

const useInput = (validateValue) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isTouched, setIsTouched] = useState(false)

//validation method is passed as props to the hook component "validateValue"
	const isEnteredValueValid = validateValue(enteredValue)
  const invalidInput = isTouched && !isEnteredValueValid;

	const inputLoseFocusHandler = () => {
    setIsTouched(true);
  };

  const inputChangeHandler = (event) => {
      setEnteredValue(event.target.value);
  };

	const reset = () => {
		setEnteredValue('')
		setIsTouched(false)
	}

return {
	value: enteredValue,
	isValid: isEnteredValueValid,
	invalidInput,
	inputChangeHandler,
	inputLoseFocusHandler,
	reset
}
}

export default useInput