import {createPortal} from "react-dom";

const Modal = (props) => (

	createPortal(
		props.children,
		document.getElementById("modal-container")
	)	
)

export default Modal;
