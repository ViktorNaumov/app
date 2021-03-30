import React from "react";
import Button from "./button";

const ButtonContainer = (props) => {
  let fun = () => {
    props.dispatch(props.func(props.form));
  };

  return (
    <Button
      updateAction={fun}
      name={props.name}
      dispatch={props.dispatch}
      func={props.func}
      form={props.form}
    />
  );
};
export default ButtonContainer;
