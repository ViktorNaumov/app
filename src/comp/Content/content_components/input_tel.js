import React from "react";

const Input_tel = (props) => {
  let inputtext = React.createRef();

  let onValueChenge = () => {
    let text = inputtext.current.value;
    props.onInput_telValueChenge(text);
  };

  return (
    <div>
      <p>
        <span className="Sp">{props.title}</span>
        
      </p>
      <input
        type="tel"
        onChange={onValueChenge}
        ref={inputtext}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input_tel;
