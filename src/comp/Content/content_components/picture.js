import React from "react"
import "../content.css"
import Picture1 from "../../../IMG/прямоугольник.png"
import Picture2 from "../../../IMG/Треугольник.png"
import Picture3 from "../../../IMG/Диск.png"
import Picture4 from "../../../IMG/Шайба.png"
import Picture5 from "../../../IMG/Сектор.png"

const PictureRec=(props)=> {
	return(
			<div className="picture">
				<img src={Picture1} alt=""/>
			</div>
						
		);
};

const PictureTri=(props)=> {
	return(
			<div className="picture">
				<img src={Picture2} alt=""/>
			</div>
						
		);
};	

const PictureCir=(props)=> {
	return(
			<div className="picture">
				<img src={Picture3} alt=""/>
			</div>
						
		);
};

const PictureWas=(props)=> {
	return(
			<div className="picture">
				<img src={Picture4} alt=""/>
			</div>
						
		);
};	

const PictureSec=(props)=> {
	return(
			<div className="picture">
				<img src={Picture5} alt=""/>
			</div>
						
		);
};	









	export {PictureRec, PictureTri, PictureCir, PictureWas, PictureSec};