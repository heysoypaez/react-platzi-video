import React from "react";
import Searcher from "../widgets/containers/searcher.js"

import "./categories.css";
import Category from "./category.js";
	

const Categories = (props) => (

	<div className="Categories">

		<header className="Categories-header">
			<h1> Vive la música, es parte de lo genial en tu vida </h1>
		</header>

		<section className="Categories-section">

			<Searcher />		
			{ 
				props.categories.map( item => (

						<Category 
							handleOpenModal={props.handleOpenModal}
							key={item.id}
							{...item}		
						/>
				))
			}
			<Searcher />
		</section>
	</div>
) 


export default Categories;