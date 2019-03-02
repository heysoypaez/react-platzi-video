/*
Autor: Daniel Páez

*/

/*IMPORTACION DE RECURSOS
==========================*/

	import React from "react";
	import ReactDOM from "react-dom";
	import Media from "./src/playlist/components/media.js";


/*INICIALIZACION DE ARCHIVO
============================*/

	console.log("¿En qué te puedo ayudar?");


/*DECLARACION DE VARIABLES
============================*/

	/*Selectores
	============*/

		const app = document.getElementById("app")


/*REACT RENDER
====================*/

	//ReactDOM.render(que Voy A Renderizar, donde lo hare en el DOM);
	ReactDOM.render(

		<Media
		 title= "¿Cúal es la pregunta más dificil qué te has hecho?"
		 author="Daniel Páez"
		 image= "./public/img/stoicism-cover.jpg"
		 />

		 , app
	);

	//<Media /> asi sabe que es un componente


/*Notas mientras programo
=========================

	Esencia destilada para el blog
	===============================
	Puntos claves

	En react a los atributos html que colocas con jsx no se les llama atributos

	Sino propiedades

	para colocar javascript dentro de componentes de react con jsx usa llaves

	class Caja extends React.component {
	
	render() {
	return (
	<h1>{}</h1> //ALLI!!!
	)
	}
	}

	this.props.ta ta ta

	es quien me permite pasarle propiedades al componente de react que voy a escoger al momento del render

	puedes usar desestructuring y queda mejooor


	¿Para una variable traida con props que no sea requerida, se puede definir un valor por defecto en caso de que no sea pasada?

LeonidasEsteban
LeonidasEsteban
un año
Si

MyComponent.defaultProps = {
	name: 'Leonidas'
}


	Reflexion
	=========
	Me doy cuenta que en unas clases unos codigos me aportan valor pero en otras no tanto









 */