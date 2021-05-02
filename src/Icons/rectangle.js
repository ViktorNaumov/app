import React from "react"
import Rectangle1 from "../IMG/прямоугольник 2.svg"
import {NavLink} from "react-router-dom"

const Rectangle=()=>{
	return(
		<div className="icon1">
			<NavLink to="/rectangle"><img src={Rectangle1} alt="rectangle" width="30" height="30"/></NavLink>
		</div>
		);
};

export default Rectangle;