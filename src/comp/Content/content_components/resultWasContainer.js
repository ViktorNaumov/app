import { connect } from "react-redux";
import Result from "./result";

let mapStateToProps = (state) => {
  return {
    result: state.app.washer.newValuesWas[0].cost,
  };
};
const ResultWasContainer = connect(mapStateToProps)(Result);
export default ResultWasContainer;
