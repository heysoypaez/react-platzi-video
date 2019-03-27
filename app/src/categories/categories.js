

/*
Autor: Daniel Páez

*/

/*IMPORTACION DE RECURSOS
==========================*/

	import React, { Component } from "react";
	import PropTypes from "prop-types";
	import Playlist from "./components/playlist/playlist.js";
	
	//Styles
	import "./categories.css";
	import Category from "./category.js";




function Categories(props) {

	return(

		<div className="Categories">

		<header className="Categories-header">
			<h1> Vive la música, es parte de lo genial de tu vida </h1>
		</header>

		<section className="Categories-section">
			
			{
				props.categories.map( item => { 

					return (

						<Category 
							key={item.id}
							{...item}
							
							
						/>
					)

			}
				
				)
			}
		</section>
		</div>

		) 
}


export default Categories