// import { useState } from "react";
// import Button from "./button";

const Content = (props) => {
  // const [name, setName] = useState("Yash");
  // function changeName () {
  // setName(document.querySelector('select').value);
  // }
  return <div className="content">{props.children ?? <></>}</div>;
};

export default Content;
