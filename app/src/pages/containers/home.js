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

	handleOpenModal = (media) => {
		
		this.setState({
			modalVisible: true,
			media
		})		
	}


	//Reibe las props de media por parametro
	handleCloseModal = (media) => {

		this.setState({
			modalVisible: false,
			media
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
							<VideoPlayer
								autoplay= {true}
								src={this.state.media.src}
								title={this.state.media.title}
							 />
				
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
