

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
				<h1> Hola </h1>

				<Playlist 
					data={data}
					id={0}
				 />

				<Playlist
					data={data}
					id={1}
				 />


				<Playlist 
					data={data} 
					id={2}
				/>
			</div>

			) 
			

	}
}

export default SectionMedia