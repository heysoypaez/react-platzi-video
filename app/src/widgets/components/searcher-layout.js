import React from "react"
import "./searcher-layout.css"

const SearcherLayout = (props) => (

	<section className="Search">
		<form
		 className="Search-form Search"
		 onSubmit={props.handleSubmit}
		>

			<input
			 type="search"
			 ref={props.setRef} 
			 className="Search-input" 
			 placeholder="Encuentra la canción que quieres"
			 name="search"
			 onChange={props.handleChange}
			 value={props.value}
			/>
			
		</form>
	</section>
)

export default SearcherLayout;