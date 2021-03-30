import { connect } from "react-redux";
import Result from "./result";


let mapStateToProps = (state) =>{
	
	return{
		result:state.app.rectangle.newValuesRec[0].cost,
		
	};
};
const ResultRecContainer= connect(mapStateToProps)(Result);
export default ResultRecContainer;
