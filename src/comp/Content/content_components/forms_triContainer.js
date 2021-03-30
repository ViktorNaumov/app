import React from "react";
import { connect } from "react-redux";
import {
  addNewTextCreator,
  calculateCreator,
  addDataCreator,
} from "../../../Redux/reduser";
import Forms_tri from "./forms_tri";


let mapStateToProps = (state) => {
  return {
    titles:state.app.data.titles,
    steels:state.app.data.steels,
    newValue:state.app.triangle.newValuesTri[0],
    vid:state.app.data.vid,
    form:state.app.data.form.tri,
    thickness:state.app.triangle.thickness,
    placeholder:state.app.triangle.triholders,
    error: state.app.errorTriInput
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onInputValueChenge: (text, num, form, param) => {dispatch(addNewTextCreator(text, num, form, param));},
    onCalculatePush: (form) => {dispatch(calculateCreator(form));},
    onAddValuePush: (form) => {dispatch(addDataCreator(form));},
  };
};


const Forms_triContainer= connect(mapStateToProps,mapDispatchToProps)(Forms_tri);

export default Forms_triContainer;
