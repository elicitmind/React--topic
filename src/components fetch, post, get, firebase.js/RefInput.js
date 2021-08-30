import {useRef} from 'react'


const RefInput = (props) => {
const inputRef = useRef("")

function changeHandler(event) {

	props.onRef(event.target.value)
}

return <input ref={inputRef} onChange={changeHandler}></input>
}

export default RefInput