import React from "react";
import { Input } from "./styles";

function inputText(props) {
  return <Input type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>;
}

export default inputText;
