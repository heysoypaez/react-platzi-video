import React, {Component} from "react";
import HomeLayout from "../components/home-layout.js"
import Categories from "../../categories/categories.js";
import Related from "../components/related.js";
import Modal from "../../modal/containers/modal.js";
import ModalLayout from "../../modal/components/modal-layout.js";



class Home extends Component {

	state = {
		modalVisible: false,
	}

	handleOpenModal = (event) => {
		
		this.setState({
			modalVisible: true,

		})		
	}

	handleCloseModal = (event) => {

		this.setState({
			modalVisible: false,

		})
	}

	render() {

		return(


			<HomeLayout> 	

				{
					this.state.modalVisible &&
					<Modal>

						<ModalLayout

						handleClick={this.handleCloseModal}
						handleOpenModal={this.handleOpenModal}

						>
							<h2> El MAN está vivo </h2>
						</ModalLayout> 			
					</Modal> 
					
				}


				<Related />
				<Categories

				categories={this.props.data.categories}

				 />
			

			 </HomeLayout>
		)
	}

}

export default Home


//{/*Recuerda que este elemento recibe lo que le mandemos como hijos*/}
