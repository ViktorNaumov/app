import React from "react"




const Button=(props)=> {
 let fun=()=>{
	 props.func(props.form);
 };

	return(
		<button onClick={fun} className="but" >{props.name}</button>		
		);
	};
export default Button;