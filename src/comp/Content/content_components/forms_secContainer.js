import { connect } from "react-redux";
import {
  addNewTextCreator,
  calculateCreator,
  addDataCreator,
} from "../../../Redux/reduser";
import Forms_sec from "./forms_sec";

let mapStateToProps = (state) => {
  return {
    titles: state.app.data.titles,
    steels: state.app.data.steels,
    newValue: state.app.sector.newValuesSec[0],
    vid: state.app.data.vid,
    form: state.app.data.form.sec,
    thickness: state.app.sector.thickness,
    placeholder: state.app.sector.secholders,
    error: state.app.errorSecInput,
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

const Forms_secContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms_sec);

export default Forms_secContainer;
