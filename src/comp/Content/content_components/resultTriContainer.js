import { connect } from "react-redux";
import Result from "./result";


let mapStateToProps = (state) =>{
	return{
		result:state.app.triangle.newValuesTri[0].cost
	}
};
const ResultTriContainer= connect(mapStateToProps)(Result);
export default ResultTriContainer;
