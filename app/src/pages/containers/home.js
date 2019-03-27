import React, {Component} from "react";
import HomeLayout from "../components/home-layout.js"
import Categories from "../../categories/categories.js";
import Related from "../components/related.js";
import Modal from "../../modal/containers/modal.js";


class Home extends Component {

	render() {

		return(


			<HomeLayout> 	

				<Modal> 
					<h2> El MAN está vivo </h2>
				</Modal> 


				<Related />
				<Categories />
			

			 </HomeLayout>
		)
	}

}

export default Home


//				{/*Recuerda que este elemento recibe lo que le mandemos como hijos*/}
