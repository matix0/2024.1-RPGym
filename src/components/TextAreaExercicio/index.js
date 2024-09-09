import React from 'react';

import { TextArea } from './styles';

function TextAreaExercicio(props) {
  return <TextArea rows={props.rows} cols={props.cols} placeholder={props.placeholder} value={props.value} onChange={props.onChange}></TextArea>;
}

export default TextAreaExercicio;