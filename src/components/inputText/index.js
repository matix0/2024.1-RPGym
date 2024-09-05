import React from "react";
import { Input } from "./styles";

function inputText(props) {
  return <Input type={props.type} placeholder={props.placeholder} />;
}

export default inputText;
