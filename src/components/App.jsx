import React, { useState } from "react";
import ListItem from "./ListItem.jsx";

function App() {
  const [item, setItem] = useState("");
  // const listItems = [];
  const [list, setList] = useState([]);

  function handleInput(event) {
    setItem(event.target.value);
  }

  function handleSubmit() {
    setList([...list, item]);
    setItem("");
    // listItems.push(item);
    // console.log(listItems);
    console.log(list);
    // return listItems;
  }

  function handleDelete() {
    setList(list.splice(0, list.length - 1));
  }

  function deleteItem(id) {
    setList((prevItems) => {
      console.log(prevItems);
      return prevItems.filter((item, index) => {
        console.log(index);
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>I COMMIT TO</h1>
      </div>
      <div className="form">
        <input type="text" value={item} onChange={handleInput} />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
        <button onClick={handleDelete}>
          <span>Delete</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((e, index) => (
            <ListItem key={index} id={index} text={e} onDelete={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
