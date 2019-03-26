import React, {Component} from "react";
import HomeLayout from "../components/home-layout.js"
import Categories from "../../categories/categories.js";
import Related from "../components/related.js";


class Home extends Component {

	render() {

		return(

			<HomeLayout> 	

				<Related />
				<Categories />


			 </HomeLayout>
		)
	}

}

export default Home