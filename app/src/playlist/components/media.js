

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

/*
		state = {
			ticket: "Proximamente"
		}
*/


		constructor(props) {
			super(props) //recibiendo propiedades
			this.state = {

				 ticket: props.ticket,
				 mediaCover: " ",
			}

		}

		//Los arrow function heredan siempre el contexto de su padre
		handleClick = (event) => {
			
			console.log(event)
			/*Los estados son mutables, los props no*/

			if (this.state.ticket === "Proximamente")
			{
				this.setState({
				ticket: "Solo en Cines",
				})
			}
			else {
				this.setState({
				ticket: "Proximamente",
				})
			}
			
		};

		handleMouseEnter = (event) => {

			alert("Oh God, you push your hand hover me")
			this.setState({
				mediaCover: "media-cover-hover"
			})
		}

		//metodo principal
		render() {

			
			/*PROPS DE MI COMPONENTE
			=========================*/
			const {
				image, 
				title, 
				author
			} = this.props;


		/*ESO ES JSX*/
			return (
			<div className="Media" 
				 onClick={this.handleClick}
				 onMouseEnter={this.handleMouseEnter}
				 onMouseLeave={this.handleMouseLeave}
				 	 
			>

				<div className="Media-cover" className={this.state.mediaCover}>
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
					<p className="Media-ticket">{this.state.ticket}</p>
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