

/*
Autor: Daniel Páez

*/

/*IMPORTACION DE RECURSOS
==========================*/

	import React, { Component } from "react";
	import PropTypes from "prop-types";
	import Playlist from "./components/playlist/playlist.js";	


function Category(props) {

		return(
			<div className="Category">

				<header className="Category-header">
					<h1>{props.title}</h1>
					<p>{props.description}</p>
				</header>

				<section className="Category-section">

					<Playlist
				 		 playlist={props.playlist}
				 	 />
				 			
				</section>
			</div>
		) 
		
}

export default Category