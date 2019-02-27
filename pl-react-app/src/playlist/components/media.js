

/*
Autor: Daniel Páez

*/

/*IMPORTACION DE RECURSOS
==========================*/

	import React, { Component } from "react"


/*INICIALIZACION DE ARCHIVO
============================*/

	console.log("Media JS aqui");


/*DECLARACION DE COMPONENTES
============================*/

	//Estoy creando un componente chiquito que llamaremos media


	//Estamos creando una clase de js
	class Media extends Component {

		//metodo principal
		render() {

		/*ESO ES JSX*/
			return (
				<div>
					<div> 
						<img src=""
							 alt="" 
							 width={260}
							 height={160}
						/>
					</div>

					<h3>¿Por qué ser estoico?</h3>
					<p>Daniel Páez</p>
				</div>
				)
		} 
		//adentro contendra el html, la figura, el ui

	}

export default Media;

/*REACT RENDER
====================*/


/*Notas mientras programo
=========================
	
	Reflexion
	=========
	Me doy cuenta que en unas clases unos codigos me aportan valor pero en otras no tanto
	Comenta mucho y despues leete y nivela, calibra








 */