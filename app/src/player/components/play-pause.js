import React from "react";

import "./play-pause.css"

import Play from "../../icons/components/children/play.js"
import Pause from "../../icons/components/children/pause.js"


function PlayPause(props) {

	let IconsSize = 30;
	return(

		<div className="PlayPause">

			<button onClick={props.handleClick} >	
			{
				props.pause ?

				<Play size={IconsSize} color="pink" />
				:
				<Pause size={IconsSize} color="pink" />	  
			
			}
			</button>
		

		</div>
	)
}


export default PlayPause;