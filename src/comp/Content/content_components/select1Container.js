import React from "react";
import Select1 from "./select1";

const Select1Container = (props) => {
  let onValueChenge = (text, num, form) => {
    props.dispatch(props.creator(text, num, form));
  };

  return (
    <Select1
      updateValue={onValueChenge}
      name={props.name}
      thickness={props.thickness}
      newValue={props.newValue}
      vid={props.vid}
      form={props.form}
    />
  );
};

export default Select1Container;
