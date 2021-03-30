import React from "react";
import Select from "./select";
import Select1 from "./select1";
import Input from "./input";
import Button from "./button";

const Forms_sec = (props) => {
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
        stylevalue={props.error.input1? "text-red":null}
        name={props.titles[5].title}
        name1={props.titles[9].title}
        id={props.titles[13].title}
        newValue={props.newValue.newValueInp1}
        vid={props.vid.in1}
        form={props.form}
        placeholder={props.placeholder.ps1}
        param={props.placeholder.param}
        onInputValueChenge={props.onInputValueChenge}
      />
      <Input
        stylevalue={props.error.input2? "text-red":null}
        name={props.titles[3].title}
        name1={props.titles[9].title}
        id={props.titles[17].title}
        newValue={props.newValue.newValueInp2}
        vid={props.vid.in2}
        form={props.form}
        placeholder={props.placeholder.ps2}
        param={props.placeholder.param}
        onInputValueChenge={props.onInputValueChenge}
      />
      <Input
        stylevalue={props.error.input3? "text-red":null}
        name={props.titles[6].title}
        name1={props.titles[8].title}
        id={props.titles[16].title}
        newValue={props.newValue.newValueInp3}
        vid={props.vid.in3}
        form={props.form}
        placeholder={props.placeholder.ps3}
        param={props.placeholder.param}
        onInputValueChenge={props.onInputValueChenge}
      />
      <Input
        name={props.titles[7].title}
        newValue={props.newValue.newValueInp4}
        vid={props.vid.in4}
        form={props.form}
        placeholder={props.placeholder.ps4}
        param={props.placeholder.param}
        onInputValueChenge={props.onInputValueChenge}
      />
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
export default Forms_sec;
