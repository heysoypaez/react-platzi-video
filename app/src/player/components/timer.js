import React from "react";
import "./timer.css";

const Timer = (props) => {




	return(
		<section className="Timer">

			<p>
				<span>0 / {props.duration} </span>

			</p> 

		</section>

	)

}


export default Timer;