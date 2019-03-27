
	//Elige tus batallas, Si no hace falta un ciclo de vida usa un componente funcional

/*Imports
===========*/
	import React from "react";
	import PropTypes from "prop-types";
	import Media from "./components/media.js";
	import "./playlist.css"


/*Functional component
=======================*/

	function Playlist(props) {
			                               

			return(
				<div className="Playlist">


					<section className="Playlist-content">
						
						{
						props.playlist.map( item => {
							return (

							 <Media
								 {...item /*iterando props sobre playlist*/}
								 key={item.id}
							  />
							   )
						})
						}

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

	export default Playlist
