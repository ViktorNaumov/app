import React from "react"
import Sector1 from "../IMG/сектор1.svg"
import {NavLink} from "react-router-dom"

const Sector=()=>{
	return(
		<div className="icon5">
			<NavLink to="/sector"><img src={Sector1} alt="sector" width="38" height="38"/> </NavLink>
		</div>
		);
};

export default Sector;