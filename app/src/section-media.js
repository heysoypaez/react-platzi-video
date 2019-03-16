

/*
Autor: Daniel Páez

*/

/*IMPORTACION DE RECURSOS
==========================*/

	import React, { Component } from "react"
	import PropTypes from "prop-types";
	//import "./section-media.css"
	import Playlist from "./playlist/playlist.js"
	import data from "./api.json"
	import "./section-media.css"




class SectionMedia extends Component {


	render() { 

		return(
			<div>
				<h1> Vive la música, es parte de tus momentos importantes </h1>

				{Playlist(data,0)}
				{Playlist(data,1)}
				{Playlist(data,2)}
			
			</div>

			) 
			

	}
}

export default SectionMedia