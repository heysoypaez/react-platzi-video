import React , {Component} from "react";
import VideoPlayerLayout from "../components/video-player-layout.js";
import "./video.css";



class Video  extends Component {

	render() {



		return(	

			<section className="Video">
			
				<video
				 autoPlay = {this.props.autoplay}
				 src={this.props.src}
				 />

			</section>
		)
	}

}

export default Video;


/*
Para hacer jsx con react hay que aplicar camelcase a los atirbutos html
*/