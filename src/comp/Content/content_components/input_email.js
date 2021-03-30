import React from "react";

const Input_email = (props) => {
  let inputtext = React.createRef();

  let onValueChenge = () => {
    let text = inputtext.current.value;
    props.onInput_emailValueChenge(text);
  };

  return (
    <div>
      <p>
        <span className="Sp">{props.title}</span>
        
      </p>
      <input
        type="email"
        onChange={onValueChenge}
        ref={inputtext}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input_email;
