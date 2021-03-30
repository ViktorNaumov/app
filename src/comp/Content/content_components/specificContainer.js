import { connect } from "react-redux";
import { pushDataThunkCreator, specTableEditCreator } from "../../../Redux/reduser";
import Specification from "./specific";

let mapStateToProps = (state) => {
  return {
    arrayData: state.app.SpecArray,
    title: state.app.data.titles,
    type: state.app.data.titles,
    
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    apiPush: (arrayData) => {
      dispatch(pushDataThunkCreator(arrayData));
    },
    tableEdit:(id) =>{
      dispatch(specTableEditCreator(id))
    }
    
  };
};
const SpecificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Specification);
export default SpecificationContainer;
