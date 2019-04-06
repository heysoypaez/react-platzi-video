import {Component} from "react";
import {createPortal} from "react-dom";

class Modal extends Component {


	render() {

		const modalContainer = document.getElementById("modal-container");

		return createPortal(

			this.props.children,
			modalContainer

			)
	}
}

export default Modal;

/*
Necesito retornar un portal

Para ello uso una funcion que me da React que se llama create Portal

createPortal(queVoyARenderizar, dondeLoHare)

Para leonidas this.props.children hace que cualquier componente le sea super reutilizable

Por que ?

El orden permite la implementacion, accion y reutilizacion
*/