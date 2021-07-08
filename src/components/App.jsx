import React from "react";
import LoginForm from "./LoginForm.jsx"

var isLoggedIn = false

const currentTime = new Date().getHours()

console.log(currentTime)


function App() {
return <div className="container">


//TERNARY
 { isLoggedIn ? <h1>Hello</h1> : <LoginForm /> }

 //AND OPERATOR
{ (currentTime <= 10 && currentTime >=4) && <h1>Productivity Time</h1> }
      </div>
    
  };


export default App;
