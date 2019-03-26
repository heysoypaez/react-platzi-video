

/*
Autor: Daniel Páez

*/

/*IMPORTACION DE RECURSOS
==========================*/

	import React, { Component, PureComponent } from "react"
	import PropTypes from "prop-types";
	import "./media.css"


	import Play from "../../../../icons/components/children/play.js"
	import Pause from "../../../../icons/components/children/pause.js"
	import Volume from "../../../../icons/components/children/volume.js"
	import FullScreen from "../../../../icons/components/children/full-screen.js"



/*INICIALIZACION DE ARCHIVO
============================*/

	console.log("Media JS aqui");


/*DECLARACION DE COMPONENTES
============================*/

	//Estoy creando un componente chiquito que llamaremos media


	//Estamos creando una clase de js
	class Media extends PureComponent {

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
				 cta: " ",
			}

			this.IconsSize = 30;

			

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

			//alert("Oh God, you push your hand hover me")
			this.setState({
				cover: "media-cover-hover",
				cta: "¿Quieres ver esta peli ahora?",

			})
		}

		handleMouseLeave = (event) => {

			//alert("Oh God, you push your hand hover me")
			this.setState({
				cover: " ",
				cta: " ",

			})
		}

		


		//metodo principal
		render() {

			
			/*PROPS DE MI COMPONENTE
			=========================*/
			const {
				cover, 
				title, 
				author
			} = this.props;

			const {IconsSize} = this;


		/*ESO ES JSX*/
			return (
			<div className={`Media ${this.props.new}`} 
				 onClick={this.handleClick}
				 onMouseEnter={this.handleMouseEnter}
				 onMouseLeave={this.handleMouseLeave}
				 	 
			>

				<div className="Media-cover" className={this.state.cover}>
					<div> 
						<img src= {cover}
							 alt="cover-playlist" 
							 width="90%"
							 height={160}
							 className="Media-image"
						/>
					</div>

					<h3 className="Media-title">{title}</h3>

					<p className="Media-author">{author}</p>


					<Play
						size={IconsSize}
						color="pink"
					/>


					<Pause
						size={IconsSize}
						color="pink"
					/>


					<Volume
						size={IconsSize}
						color="pink"
					/>


					<FullScreen
						size={IconsSize}
						color="pink"
					/>




					<p className="Media-ticket">{this.state.ticket}</p>
				</div>

				<div className="Media-cta"> {this.state.cta} </div>
			</div>
				)
		} 
		//adentro contendra el html, la figura, el ui

	}

Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(["audio", "video"]),
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




¿Pure component? ¿Que es ? ¿Que valor me aporta?


Pure component actualiza automaticamnete sin escribir un shouldComponentUpdate





como se ve vs que hce


Smart components

dumbs components

mis componentes


Dumb components

- Es  un componente de UI
- Es un componente presentacional
- Estan escritos como componentes funcionales, a menos que performance diga lo conntrario
- Puede contener smart components  y dumb components
- No especifica como los datos son cargados o mutados 
- Recibira datos y callbacks por props
- 99% componentes ffuncionales, 1% pure componentes


Containers

- sin estilos
- concentrado en la logica de la app
- proveen de datos a ui y otros contenedores
-  suelen tener estado
- proveen callbacks
- generados por higher order components
- llaman acciones



- separacion de responsabilides
- mejorar cp de reutilizacion


 */