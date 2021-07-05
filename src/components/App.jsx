import React from "react";
import emojipedia from "../emojipedia.js"
import EmojiCard from "./EmojiEntry.jsx"

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
     {emojipedia.map(props => <EmojiCard {...props} key={props.id} />)}
      </dl>
    </div>
  );
}

export default App;
