import React, { useState } from "react";

function ListItem(props) {
  const [propsClicked, setClick] = useState(false);
  function handleClick() {
    setClick((prevValue) => {
      return !prevValue;
    });
    setTimeout(() => {
      //to prevent function trigger on render while passing it with
      // props inside we use different syntax: onClick={()=>{props.function(props)}}
      props.onDelete(props.id);
      setClick(false);
    }, 2000);
  }
  // const styles = { textDecoration: "line-through" };
  console.log(propsClicked);
  return (
    <li
      style={propsClicked ? { textDecoration: "line-through" } : null}
      onClick={handleClick}
    >
      {props.text}
    </li>
  );
}

export default ListItem;
