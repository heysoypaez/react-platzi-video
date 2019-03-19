
	//Elige tus batallas, Si no hace falta un ciclo de vida usa un componente funcional

/*Imports
===========*/
	import React from "react";
	import PropTypes from "prop-types";
	import Media from "./components/media.js";
	import "./playlist.css"
	import Play from "../icons/components/play.js"


/*Functional component
=======================*/

	function Playlist(data, id) {
			
			/*Verificacion de la data
			=========================*/
			console.log(data.categories[id]);

			/*Variables
			============*/
			const {categories} = data;
			
			/*Declaración de funciones
			===============================*/
			const renderPlaylist = (i) => {

					let dataPlaylist = categories[i].playlist 

					const getDataAndRender = (item) => <Media {...item} key = {item.id} />

					return dataPlaylist.map(getDataAndRender)				
			}
			                               

			return(
				<div className="Playlist">
					<header className="Playlist-header">
						<h1>{categories[id].title}</h1>
					</header>

					<Play
						size={70}
						color="blue"
					/>

					<section className="Playlist-content">
						
						{renderPlaylist(id)}
						
						<Media 
						title="Agrega tu nueva Media a la lista"
						new= "Media-new"
						cover="./images/covers/question-mark.png"
						author="Tú"
						/>

					</section>
				</div>
			)
	}


/*Exports
===========*/

	export default Playlist
