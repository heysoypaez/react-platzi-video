

/*
Autor: Daniel Páez

*/

/*IMPORTACION DE RECURSOS
==========================*/

	import React, { Component } from "react"
	import "./media.css"


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

			
			/*PROPS DE MI COMPONENTE
			=========================*/
			const {
				image, 
				title, 
				author,
			} = this.props;

		/*ESO ES JSX*/
			return (
			<div className="Media">
				<div className="Media-cover">
					<div> 
						<img src= {image}
							 alt="Cover estoicismo" 
							 width="90%"
							 height={160}
							 className="Media-image"
						/>
					</div>

					<h3 className="Media-title">{title}</h3>

					<p className="Media-author">{author}</p>
				</div>
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