import React from "react"
import Basket1 from "../IMG/корзина.svg"
import {NavLink} from "react-router-dom"

const Basket=()=>{
	return(
		<div className="basket">
			<NavLink to="/basket"> <img src={Basket1} alt="basket" width="38" height="38"/></NavLink>
		</div>
		);
};

export default Basket;