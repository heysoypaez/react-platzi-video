import React from "react";
import "./modal-layout.css";

function ModalLayout(props) {

	return(

		<section className="Modal">

		<button className="Modal-close" onClick={props.handleClick}>X</button>
		{props.children}
		</section>

	)


}

export default ModalLayout;


/*
Aqui no uso this.props porque this solo aplica dentro de un prototipo, dentro de un objeto, una clase


Recuerda que los componentes funcionales no deberia manejar sus propios ventos

Deberia venir por propiedades

*/
