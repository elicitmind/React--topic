import React, {useState} from "react"

function ToDoForm(props) {    
  const [item, setItem] = useState("");


  function handleInput(event) {
    setItem(event.target.value);
  }

  return (
    <div className="form">
      <input type="text" value={item} onChange={handleInput} />
      <button onClick={() => {
        props.handleSubmit(item)
        setItem("")
      }}>
        <span>Add</span>
      </button>
      <button onClick={props.handleDelete}>
        <span>Delete</span>
      </button>
    </div>
  )
}

export default ToDoForm