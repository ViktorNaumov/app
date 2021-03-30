import React from "react"
import Triangle1 from "../IMG/треугольник.svg.svg"
import {NavLink} from "react-router-dom"

const Triangle=()=>{
	return(
		<div class="icon2">
			<NavLink to="/triangle"><img src={Triangle1} alt="triangle" width="38" height="38"/></NavLink>
		</div>
		);
};

export default Triangle;