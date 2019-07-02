import React from "react"
import VolumeIcon from "../../icons/components/children/volume.js"
import "./volume.css"

function Volume(props) {

	return(
		<button
			className="Volume"
			onClick={props.handleClick}
		>		
			<div className="Volume-range">
				<input
				 type="range"
				 min={0}
				 max={1}
				 step={.05} 
				 onChange={props.handleChange}
				 value={props.value}
				/>	
			</div>

			<VolumeIcon 
				color="white"
				size={30}
			/>
		</button>
	)
}

export default Volume