import { connect } from "react-redux";
import Result from "./result";

let mapStateToProps = (state) => {
  return {
    result: state.app.circle.newValuesCir[0].cost,
  };
};
const ResultCirContainer = connect(mapStateToProps)(Result);
export default ResultCirContainer;
