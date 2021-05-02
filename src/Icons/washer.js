import React from "react"
import Washer1 from "../IMG/шайба4.svg"
import {NavLink} from "react-router-dom"

const Washer=()=>{
	return(
		<div className="icon4">
			<NavLink to="/washer"><img src={Washer1} alt="washer" width="38" height="38"/> </NavLink>
		</div>
		);
};

export default Washer;