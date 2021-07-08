import React from "react";
import Avatar from "./Avatar.jsx";
import Detail from "./Detail.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <Detail detail={props.id} />
        <h2 className="name">{props.name}</h2>
        <Avatar imgurl={props.imgurl} />
      </div>
      <div className="bottom">
        <Detail detail={props.email} />
        <Detail detail={props.karma} />
      </div>
    </div>
  );
}

export default Card;
