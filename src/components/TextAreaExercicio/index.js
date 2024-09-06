import React from 'react';

import { TextArea } from './styles';

function TextAreaExercicio(props) {
  return <TextArea rows={props.rows} cols={props.cols} placeholder={props.placeholder}></TextArea>;
}

export default TextAreaExercicio;