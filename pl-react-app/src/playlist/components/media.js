

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

			const styles = {
				container: {
					//por defecto react usa pixeles
					// si quiero otra uso comillas
					fontSize: 18,
					color: "#eee",
					fontFamily: "sans-serif",
					backgroundColor: "red",
					padding: "30px 10px 5px 10px",
					cursor: "pointer",
					width: 245,
					height: `auto`,
					border: "1px dashed white"
				}
			}

			const author = {
				styles: {
					fontStyle: "italic",
				}
			}

		/*ESO ES JSX*/
			return (
			<div style={styles.container}>
				<div>
					<div> 
						<img src="./public/img/stoicism-cover.jpg"
							 alt="Cover estoicismo" 
							 width={"90%"}
							 height={160}
						/>
					</div>

					<h3>La filosofía importa ¿Por qué ser estoico?</h3>
					<p style={author.styles}>Daniel Páez</p>
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