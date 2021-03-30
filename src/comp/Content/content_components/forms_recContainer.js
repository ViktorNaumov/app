import { connect } from "react-redux";
import {
  addNewTextCreator,
  calculateCreator,
  addDataCreator,
} from "../../../Redux/reduser";
import Forms_rec from "./forms_rec.js";



let mapStateToProps = (state) => {
  return {
    titles: state.app.data.titles,
    steels: state.app.data.steels,
    newValue: state.app.rectangle.newValuesRec[0],
    vid: state.app.data.vid,
    form: state.app.data.form.rec,
    thickness: state.app.rectangle.thickness,
    placeholder: state.app.rectangle.recholders,
    error: state.app.errorRecInput  
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

const Forms_recContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms_rec);
export default Forms_recContainer;
