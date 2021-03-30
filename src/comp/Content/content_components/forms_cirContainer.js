import {
  addNewTextCreator,
  calculateCreator,
  addDataCreator,
} from "../../../Redux/reduser";
import Forms_cir from "./forms_cir.js";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    titles: state.app.data.titles,
    steels: state.app.data.steels,
    newValue: state.app.circle.newValuesCir[0],
    vid: state.app.data.vid,
    form: state.app.data.form.cir,
    thickness: state.app.circle.thickness,
    placeholder: state.app.circle.cirholders,
    error: state.app.errorCirInput,
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

const Forms_cirContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms_cir);
export default Forms_cirContainer;
