import React from "react";

const Input = (props) => {
  
 

  let inputtext = React.createRef();

  let onValueChenge = () => {
    
    let num = props.vid;
    let form = props.form;
    let text = inputtext.current.value;
    let param = props.param;
    props.onInputValueChenge(text, num, form, param);
  };

  return (
    <div>
      <p>
        {props.name}&nbsp;<span className="Sp">{props.id}</span>
        {props.name1}
      </p>
      <input
        
        disabled={props.param ? false: true}
        className={`${props.stylevalue}`}
        onChange={onValueChenge}
        ref={inputtext}
        value={props.newValue}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
