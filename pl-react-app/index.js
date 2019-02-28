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
	//Siempre vamos a llamar a react
	//Puedes organizar como quieras pero piensa en la arquitectura
	
	//Hay componentes
	-funcional
	-puro
	-normal o clasico (Estado)

	los archivos react .js no se autoejecuta, necesito llamarlo
	
	OJO: ,os nombres de los componentes empiezan en mayuscula

	Reflexion
	=========
	Me doy cuenta que en unas clases unos codigos me aportan valor pero en otras no tanto









 */