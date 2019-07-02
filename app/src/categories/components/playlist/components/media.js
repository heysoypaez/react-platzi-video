
	import React, { PureComponent } from "react"
	import PropTypes from "prop-types";
	import "./media.css"


	class Media extends PureComponent {

		constructor(props) {
			super(props) 

			this.state = {

				 ticket: props.ticket,
				 mediaCover: " ",
				 cta: " ",
			}

			this.IconsSize = 30;
		}

		handleMouseEnter = (event) => {

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

		openModal = (event) => {
			
			this.props.openModal(this.props)
		}

		render() {

			const {
				cover, 
				title, 
				author
			} = this.props;


			return (

			<div 
			 className={`Media ${this.props.new}`} 
			 onClick={this.openModal}
			 onMouseEnter={this.handleMouseEnter}
			 onMouseLeave={this.handleMouseLeave}
			>

				<div className={`${this.state.cover}`}>
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
	}

Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(["audio", "video"]),
}

export default Media;