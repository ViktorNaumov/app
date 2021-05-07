import React from "react"
import "../content.css"


const Result=(props)=> {
	
	return(
			<div className="result">
				<p>Стоимость, руб./шт. :</p>
	<output className="summ">{props.result}</output>
			</div>						
		);
	};
	export default Result;