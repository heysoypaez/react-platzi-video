import React from "react";
import "./spinner.css";

function Spinner(props) {

	if(props.active) {

		return(
			<section class="Spinner">
			Calma, cargando... 
			</section>
		)
	}

	else return null
}

export default Spinner;