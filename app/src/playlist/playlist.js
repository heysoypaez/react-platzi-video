import React, {Component} from "react";
import PropTypes from "prop-types";
import Media from "./components/media.js";
import "./playlist.css"

class Playlist extends Component {
	render() {

		const {data} = this.props
		console.log(data);
		const {categories} = data;
		

		const  renderPlaylist = (i) => {

				let playlist;
				
				playlist = categories[i].playlist 

				return(
					<section>

						 {		
						 	playlist.map( (item) => {
						 		return <Media 
						 		{...item}
						 		key = {item.id}


						 		 />
						 	})
						 }
					</section>
				)
		}


		//Props
		const {
			id
		} = this.props
		
		
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
		return(
			<div className="Playlist">
				<header className="Playlist-header">
					<h1>{categories[id].title}</h1>
				</header>

				<section className="Playlist-content">
				{renderPlaylist(id)}
				</section>
			</div>

		)
	}
}

//todo componente debe exportar algo
export default Playlist



/*Reto

crear a cada componente su hoja de stilos

usar la teoria de listas para imprimir las otras categorias


*/