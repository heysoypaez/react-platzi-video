import React from "react";
import "./timer.css";


const Timer = (props) => (
	
		<section className="Timer">
			<p>
				<span>{props.currentTime}  /  {props.duration} </span>
			</p> 
		</section>

	)



export default Timer;