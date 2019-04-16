
	import React, { PureComponent } from "react"
	import PropTypes from "prop-types";
	import "./media.css"

	

	//Estoy creando un componente chiquito que llamaremos media
	class Media extends PureComponent {

		constructor(props) {
			super(props) //recibiendo propiedades
			this.state = {

				 ticket: props.ticket,
				 mediaCover: " ",
				 cta: " ",
			}

			this.IconsSize = 30;

		}


		handleMouseEnter = (event) => {

			//alert("Oh God, you push your hand hover me")
			this.setState({
				cover: "media-cover-hover",
				cta: "¿Quieres ver esta peli ahora?",

			})
		}

		handleMouseLeave = (event) => {

			this.setState({
				cover: " ",
				cta: " ",

			})
		}

		
		 render() {

			
			/*PROPS DE MI COMPONENTE
			=========================*/
			const {
				cover, 
				title, 
				author
			} = this.props;

			const {IconsSize} = this;


		/*ESO ES JSX*/
			return (
			<div className={`Media ${this.props.new}`} 
				 onClick={this.props.handleClick}
				 onMouseEnter={this.handleMouseEnter}
				 onMouseLeave={this.handleMouseLeave}
				 	 
			>

				<div className="Media-cover" className={this.state.cover}>
					<div> 
						<img src= {cover}
							 alt="cover-playlist" 
							 width="90%"
							 height={160}
							 className="Media-image"
						/>
					</div>

					<h3 className="Media-title">{title}</h3>

					<p className="Media-author">{author}</p>

				</div>

				<div className="Media-cta"> {this.state.cta} </div>
			</div>
				)
		} 
		//adentro contendra el html, la figura, el ui

	}

Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(["audio", "video"]),
}

export default Media;

