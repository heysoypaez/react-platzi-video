import React from "react";
import "./modal-layout.css";

function ModalLayout(props) {

	return(

		<section className="Modal">

			{props.children}
			<button className="Modal-close" onClick={props.handleClick}>X</button>
			
		</section>

	)


}

export default ModalLayout;


/*
Aqui no uso this.props porque this solo aplica dentro de un prototipo, dentro de un objeto, una clase


Recuerda que los componentes funcionales no deberia manejar sus propios ventos

Deberia venir por propiedades

*/
