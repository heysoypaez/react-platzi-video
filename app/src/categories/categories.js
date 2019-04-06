
	import React from "react";
	import PropTypes from "prop-types";
	import Playlist from "./components/playlist/playlist.js";
	import Searcher from "../widgets/containers/searcher.js"
	
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

			<Searcher />
			
			{ 
				props.categories.map( item => { 

					return (

						<Category 
							handleOpenModal={props.handleOpenModal}
							key={item.id}
							{...item}		
						/>
					)
				})
			}

			<Searcher />
		</section>
		</div>

		) 
}


export default Categories