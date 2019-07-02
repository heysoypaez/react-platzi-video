import React from "react";
import "./modal-layout.css";

const ModalLayout = (props) => (

	<section className="Modal">

		{props.children}
		<button 
			className="Modal-close" 
			onClick={props.handleClick}>
		X
		</button>
			
	</section>
)


export default ModalLayout;
