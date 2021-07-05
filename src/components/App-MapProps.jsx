import React from "react";
import Card from "./Card.jsx";
import { contacts, myAvatar } from "./contacts.jsx";
import Avatar from "./Avatar.jsx";

function App() {
  return (
    <div>
      <h1 className="heading">My mindset</h1>
      <Avatar
        imgurl={myAvatar}
      />

      {/* {contacts.map((props) => (
        <Card
          name={props.name}
          imgurl={props.imgurl}
          karma={props.karma}
          email={props.email}
        />
      ))} */}

      {contacts.map((props) => (
        <Card {...props} key={props.id} />
      ))}
    </div>
  );
}

export default App;
