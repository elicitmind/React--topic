//import requires specified packages
import React from "react";
import ReactDOM from "react-dom";

//predefined variable
const content = 'there is no barrier you are not able to cross'

//render the body with react
ReactDOM.render(
  //put all the html elements into one div
  <div>
    {/* to implement css class use className parameter */}
    <h1 className="heading">Hello Friend.</h1>
    <p>I am happy that you are alive.</p>
    {/* predefined variable put in the curly braces */}
    <p> {content} </p>
  </div>,


  // specify where to render the above
  document.getElementById("root")
);
