import { connect } from "react-redux";
import {
  addNewTextCreator,
  calculateCreator,
  addDataCreator,
} from "../../../Redux/reduser";
import Forms_was from "./forms_was.js";

let mapStateToProps = (state) => {
  return {
    titles: state.app.data.titles,
    steels: state.app.data.steels,
    newValue: state.app.washer.newValuesWas[0],
    vid: state.app.data.vid,
    form: state.app.data.form.was,
    thickness: state.app.washer.thickness,
    placeholder: state.app.washer.washolders,
    error: state.app.errorWasInput,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onInputValueChenge: (text, num, form, param) => {
      dispatch(addNewTextCreator(text, num, form, param));
    },
    onCalculatePush: (form) => {
      dispatch(calculateCreator(form));
    },
    onAddValuePush: (form) => {
      dispatch(addDataCreator(form));
    },
  };
};

const Forms_wasContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms_was);

export default Forms_wasContainer;
