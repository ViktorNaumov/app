import React from "react";

const Select1 = (props) => {
  let inputtext = React.createRef();

  let onValueChenge = () => {
    let num = props.vid;
    let form = props.form;
    let text = inputtext.current.value;
    props.onInputValueChenge(text, num, form);
  };

  let opt = props.thickness.map((option) => <option>{option.s}</option>);

  return (
    <div>
      <p>{props.name}</p>
      <select
        onChange={onValueChenge}
        ref={inputtext}
        value={props.newValue}
        className="material"
      >
        <option></option>
        {opt}
      </select>
    </div>
  );
};

export default Select1;
