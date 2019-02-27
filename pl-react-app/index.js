/*
Autor: Daniel Páez

*/

import React from "react"
/*React me permitira crear mis componentes*/

import ReactDOM from "react-dom"
/*React DOM me permitira poner esos componentes en algun lugar*/



/*INICIALIZACION DE ARCHIVO
============================*/

console.log("¿En qué te puedo ayudar?");

/*DECLARACION DE VARIABLES
============================*/

/*Selectores
============*/

const app = document.getElementById("app")

/*JSX
=========*/
const saludo = <h1>Hoy vas a morir o quizás no</h1>;



/*REACT RENDER
====================*/

//ReactDOM.render(que Voy A Renderizar, donde lo hare en el DOM);
ReactDOM.render(saludo, app);

//Puedes renderizar un elemento de react o un componente de react

/*Notas mientras programo
=========================*/