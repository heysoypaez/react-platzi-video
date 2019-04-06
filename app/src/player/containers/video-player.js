import React , {Component} from "react";
import VideoPlayerLayout from "../components/video-player-layout.js";
import Video from "../components/video.js";
import Title from "../components/title.js";
import PlayPause  from "../components/play-pause.js";

class VideoPlayer  extends Component {

	state = {

		pause: true,
	}	


	handleToggleClickPlayPause = (event) => {
		this.setState({
			pause: !this.state.pause
		})
	}	


	componentDidMount() {
		this.setState({

			pause: (!this.props.autoplay)
		})
	}


	render() {



		return(
			<VideoPlayerLayout>
				<Title title="Crea cambio relevante" />

				<Video 
				autoplay = {this.props.autoplay}
				src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
				pause= {this.state.pause}

				/>
				<PlayPause 
					handleClick = {this.handleToggleClickPlayPause}
					pause = {this.state.pause}
				/>
			</VideoPlayerLayout>
		)
	}

}

export default VideoPlayer;


/*
Para hacer jsx con react hay que aplicar camelcase a los atirbutos html
*/