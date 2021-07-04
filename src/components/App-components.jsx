import React from "react"
//import components from created .jsx file with it
import Heading from "./Heading.jsx";
import List from "./List.jsx";

const App = () => {
    return (<div>
    {/* My custom ReactJS components, Heading, List
    the convention is to declare it with 1st letter Capitalized
    HTML-like syntax with self-closing tag */}
  <Heading />
  <List />
</div>)
}

//export to whichever file that needs it
export default App