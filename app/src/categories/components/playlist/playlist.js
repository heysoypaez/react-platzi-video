import React from "react";
import Media from "./components/media.js";
import "./playlist.css";

const Playlist = (props) => (

	<div className="Playlist">

		<section className="Playlist-content">
			
			{
			props.playlist.map( item => (

				 <Media
				 	 {...item}
				 	 openModal={props.handleOpenModal}
					 key={item.id}
				 />
			))
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

export default Playlist;
