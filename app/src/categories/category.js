
	import React from "react";
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
						 handleOpenModal={props.handleOpenModal}
				 		 playlist={props.playlist} 			
				 	 />
				 			
				</section>
			</div>
		) 
		
}

export default Category