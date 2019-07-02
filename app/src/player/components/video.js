import React , {PureComponent} from "react";
import "./video.css";

class Video  extends PureComponent {

	setRef = element => {

		this.video = element;
	}
	
	togglePlay() {

		if (this.props.pause) {

			this.video.play();
		}

		else {
			this.video.pause();
		}
	}

	componentDidUpdate(nextProps) {

		/*Ese nuevo Prop lo envia el usuario*/
		if(nextProps.pause !== this.props.pause) {

			this.togglePlay();
		}
	}

	render() {

		const {

			handleLoadedMetadata,
			handleTimeUpdate,
			handleSeeking,
			handleSought

		} = this.props

		return(	

			<section className="Video">
			
				<video className="Video-content"
				 ref={this.setRef}
				 autoPlay = {this.props.autoplay}
				 src={this.props.src}

				 onSeeking={handleSeeking}
				 onSeeked={handleSought}

				 //Este metodo que estoy llamando es un evento del objeto html media
				 onLoadedMetadata = {handleLoadedMetadata}
				 onTimeUpdate = {handleTimeUpdate}
				 />

			</section>
		)
	}
}

export default Video;