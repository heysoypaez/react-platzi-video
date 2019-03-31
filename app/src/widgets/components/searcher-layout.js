import React from "react"
import "./searcher-layout.css"

const SearcherLayout = (props) => (

	<section className="Search">
		<form className="Search-form Search">

			<input
			 type="search" 
			 className="Search-input" 
			 placeholder="Encuentra la canción que quieres" 
			/>
			
		</form>
	</section>
)

export default SearcherLayout;


/*Tambien puedo declarar componentes funcionales con arrow functions */