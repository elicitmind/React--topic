import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  function addOne() {
    setNumber(number + 1);
  }

  function subtractOne() {
    setNumber(number - 1);
  }

  const [clicked, setClick] = useState(true);

function strike() {
  setClick(true);
}

function unStrike() {
  setClick(false);
}

  
  return (
    <div><div>
      <p style={clicked ? { textDecoration: "line-through" } : null}>
        Buy milk
      </p>
      <button onClick={strike}>strike</button>
      <button onClick={unStrike}>back</button>
    </div>
  
  
    <div>
      <h1>{number}</h1>
      <button onClick={addOne}>plus</button>
      <button onClick={subtractOne}>minus</button>
    </div></div>
  
)
  }

export default App;
