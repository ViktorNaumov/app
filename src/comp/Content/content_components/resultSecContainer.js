import { connect } from "react-redux";
import Result from "./result";


let mapStateToProps = (state) =>{
	return{
		result:state.app.sector.newValuesSec[0].cost
	}
};
const ResultSecContainer= connect(mapStateToProps)(Result);
export default ResultSecContainer;
