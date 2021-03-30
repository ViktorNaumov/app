import React from "react";
import Input from "./input";

const InputContainer = (props) => {

  let onInputValueChenge = (text, num, form) => {
    props.dispatch(props.creator(text, num, form));
  };

  return (
    <Input
      updateValue={onInputValueChenge}
      name={props.name}
      name1={props.name1}
      id={props.id}
      newValue={props.newValue}
      vid={props.vid}
      form={props.form}
      placeholder={props.placeholder}
      dispatch={props.dispatch}
      creator={props.creator}
    />
  );
};

export default InputContainer;
