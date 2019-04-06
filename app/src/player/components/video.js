import React , {Component} from "react";
import "./video.css";



class Video  extends Component {

	//This.video es el elemtno html

	togglePlay() {

		if (this.props.pause) {

			this.video.play();
		}

		else {
			this.video.pause();
		}

	}

	componentDidUpdate(nextProps) {

		if(nextProps.pause !== this.props.pause) {

			this.togglePlay();
		}
	}

	setRef = element => {
		this.video = element;
	}

	render() {

		return(	

			<section className="Video">
			
				<video
				 autoPlay = {this.props.autoplay}
				 src={this.props.src}
				 ref={this.setRef}
				 />

			</section>
		)
	}

}

export default Video;

