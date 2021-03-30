import React from "react"
import {PictureRec, PictureTri, PictureCir, PictureWas, PictureSec} from "./picture.js"
import {Route} from "react-router-dom"
import ResultRecContainer from "./resultRecContainer"
import ResultTriContainer from "./resultTriContainer"
import ResultCirContainer from "./resultCirContainer"
import ResultWasContainer from "./resultWasContainer"
import ResultSecContainer from "./resultSecContainer"

const Leftblock=(props)=> {
	return(
		<div className="leftblock">
			<Route path="/rectangle" render={()=><PictureRec />} />
			<Route path="/triangle" render={()=><PictureTri />} />
			<Route path="/circle" render={()=><PictureCir />} />
			<Route path="/washer" render={()=><PictureWas />} />
			<Route path="/sector" render={()=><PictureSec />} />
			<Route path="/rectangle" render={()=><ResultRecContainer />} />
			<Route path="/triangle" render={()=><ResultTriContainer />} />
			<Route path="/circle" render={()=><ResultCirContainer />} />
			<Route path="/washer" render={()=><ResultWasContainer />} />
			<Route path="/sector" render={()=><ResultSecContainer />} />
						
		</div>
		);
	};
	export default Leftblock;