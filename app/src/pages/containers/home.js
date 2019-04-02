//IMPORTS

	import React, {Component} from "react";

	import HomeLayout from "../components/home-layout.js"

	import Categories from "../../categories/categories.js";
	import Related from "../components/related.js";

	import Modal from "../../modal/containers/modal.js";
	import ModalLayout from "../../modal/components/modal-layout.js";

	import HandleError  from "../../errors/containers/handle-error.js"

	import VideoPlayer from "../../player/containers/video-player.js";


class Home extends Component {

	state = {
		modalVisible: false,
		handleError: false,
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

			<HandleError>
			<HomeLayout> 	

				<Related />
				<Categories
				handleOpenModal={this.handleOpenModal}
				categories={this.props.data.categories}
				 />
				
			
				{
					this.state.modalVisible &&
					<Modal>

						<ModalLayout
						handleClick={this.handleCloseModal}
						>
							<VideoPlayer />
							<h2> El MAN está vivo </h2>
						</ModalLayout> 			
					</Modal> 
					
				}


			 </HomeLayout>
			</HandleError>
		)
	}

}

export default Home


//{/*Recuerda que este elemento recibe lo que le mandemos como hijos*/}
