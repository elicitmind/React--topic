import React from "react";
import Form from "./Form.jsx"

var isLoggedIn = false
var isRegistered = true

const currentTime = new Date().getHours()

console.log(currentTime)


function App() {
return <div className="container">


//TERNARY
 { isLoggedIn ? <h1>Hello</h1> : <Form isRegistered={isRegistered} /> }

 //AND OPERATOR
{ (currentTime <= 10 && currentTime >=4) && <h1>Productivity Time</h1> }
      </div>
    
  };


export default App;
