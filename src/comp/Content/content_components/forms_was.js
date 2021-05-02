import React from "react";
import DistantDiv from "./distant_div.js";
import Select from "./select.js";
import Select1 from "./select1.js";
import Input from "./input.js";
import Button from "./button.js";

const Forms_was = (props) => {
  
  return (
    <div className="forms">
      <Select
        name={props.titles[0].title}
        steels={props.steels}
        newValue={props.newValue.newValueSel1}
        vid={props.vid.sel1}
        form={props.form}
        onInputValueChenge={props.onInputValueChenge}
      />
      <Select1
        name={props.titles[1].title + props.titles[9].title}
        thickness={props.thickness}
        newValue={props.newValue.newValueSel2}
        vid={props.vid.sel2}
        form={props.form}
        onInputValueChenge={props.onInputValueChenge}
      />
      <Input
        stylevalue={props.error.input1 ? "text-red" : null}
        name={props.titles[5].title}
        name1={props.titles[9].title}
        id={props.titles[12].title}
        newValue={props.newValue.newValueInp1}
        vid={props.vid.in1}
        form={props.form}
        placeholder={props.placeholder.ps1}
        param={props.placeholder.param}
        onInputValueChenge={props.onInputValueChenge}
      />
      <Input
        stylevalue={props.error.input2 ? "text-red" : null}
        name={props.titles[5].title}
        name1={props.titles[9].title}
        id={props.titles[13].title}
        newValue={props.newValue.newValueInp2}
        vid={props.vid.in2}
        form={props.form}
        placeholder={props.placeholder.ps2}
        param={props.placeholder.param}
        onInputValueChenge={props.onInputValueChenge}
      />
      <Input
        name={props.titles[7].title}
        newValue={props.newValue.newValueInp3}
        vid={props.vid.in3}
        form={props.form}
        placeholder={props.placeholder.ps3}
        param={props.placeholder.param}
        onInputValueChenge={props.onInputValueChenge}
      />
      <DistantDiv />
      <div className="input">
        <Button
          name={props.titles[14].title}
          func={props.onCalculatePush}
          form={props.form}
        />
        <Button
          name={props.titles[15].title}
          func={props.onAddValuePush}
          form={props.form}
        />
      </div>
    </div>
  );
};
export default Forms_was;
