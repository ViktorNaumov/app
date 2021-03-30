import React from "react"
import Styles from "../content.css"
import Picture1 from "../../../IMG/прямоугольник.png"
import Picture2 from "../../../IMG/Треугольник.png"
import Picture3 from "../../../IMG/Диск.png"
import Picture4 from "../../../IMG/Шайба.png"
import Picture5 from "../../../IMG/Сектор.png"

const PictureRec=(props)=> {
	return(
			<div className="picture">
				<img src={Picture1}/>
			</div>
						
		);
};

const PictureTri=(props)=> {
	return(
			<div className="picture">
				<img src={Picture2}/>
			</div>
						
		);
};	

const PictureCir=(props)=> {
	return(
			<div className="picture">
				<img src={Picture3}/>
			</div>
						
		);
};

const PictureWas=(props)=> {
	return(
			<div className="picture">
				<img src={Picture4}/>
			</div>
						
		);
};	

const PictureSec=(props)=> {
	return(
			<div className="picture">
				<img src={Picture5}/>
			</div>
						
		);
};	









	export {PictureRec, PictureTri, PictureCir, PictureWas, PictureSec};