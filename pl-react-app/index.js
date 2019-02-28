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
	ReactDOM.render(<Media />, app);
	//<Media /> asi sabe que es un componente

	//Puedes renderizar un elemento de react o un componente de react


/*Notas mientras programo
=========================

	Esencia destilada para el blog
	===============================
	Puntos claves

		estilos con react
	1. hojas de estilo
	2. estilos en linea

	container: {
					fontSize: "14px",
					fontColor: "red",
					backgroundColor: "red",
				}

	estilos en js usamos camel case
	quitamos el guion y ponemos mayuscula

	sass + react js ? :O





	Reflexion
	=========
	Me doy cuenta que en unas clases unos codigos me aportan valor pero en otras no tanto









 */