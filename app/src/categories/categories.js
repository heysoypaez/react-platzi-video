

/*
Autor: Daniel Páez

*/

/*IMPORTACION DE RECURSOS
==========================*/

	import React, { Component } from "react"
	import PropTypes from "prop-types";
	//import "./section-media.css"
	import Playlist from "./components/playlist/playlist.js"
	import data from "../api.json";

	//Styles
	import "./categories.css";




function Categories() {

	return(
		<section class="Categories">
			<h1> Vive la música, es parte de lo genial de tu vida </h1>

			{Playlist(data,0)}
			{Playlist(data,1)}
			{Playlist(data,2)}

			{/*
				props.categories.map((), (item) => {
					<Category />
				} )
			*/}
		
		</section>

		) 
}


export default Categories