import React from "react"




function Icon(props) {
 	// body...

 	const {color, size} = props;

 	return (
 		<svg
 			fill={color}
 			height={size}
 			width={size}
 			viewBox="0 0 32 32"

 		>
 			{props.children}
 		 </svg>
 			
 	)
 
}

export default Icon;

/*Al usar children lo que logro es importar los nodos hijos o descendientes de cualquier componente icon*/

/*necesito entender mejor el {...object}

las funciones igual reciben props, lo que no reciben es un estado

MI DESAFIO
hacer la composicion del resto de iconos pausa, expand en base al componente icon
*/
