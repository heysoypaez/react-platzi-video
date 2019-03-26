

/*
Autor: Daniel Páez

*/

/*IMPORTACION DE RECURSOS
==========================*/

	import React, { Component } from "react"
	import PropTypes from "prop-types";
	//import "./section-media.css"
	import Playlist from "./components/playlist/playlist.js"
	import data from "../api.json"
	import "./section-media.css"




function Category(props) {


	render() { 

		return(
			<div>
				

				 {
				 	props.playlist.map( (item ) => {

				 		<Playlist {...item} />
					})
				 }
				
			
			</div>

			) 
			

	}
}

export default Category