import React, { useState } from "react";
import ListItem from "./ListItem.jsx";
import ToDoForm from "./ToDoForm.jsx"

function App() {
  const [list, setList] = useState([]);

  function deleteItem(id) {
    setList((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function handleSubmit(item) {
    setList([...list, item]);
    console.log(list);
  }

  function handleDelete() {
    setList(list.splice(0, list.length - 1));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>I COMMIT TO</h1>
      </div>
 <ToDoForm 
   handleSubmit={handleSubmit}
   handleDelete={handleDelete}
 />
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
