import React from "react"
import Circle1 from "../IMG/круг 2.svg.svg"
import {NavLink} from "react-router-dom"

const Circle=()=>{
	return(
		<div class="icon3">
			<NavLink to="/circle"><img src={Circle1} alt="circle" width="38" height="38"/></NavLink>
		</div>
		);
};

export default Circle;