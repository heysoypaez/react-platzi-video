import React , {Component} from "react";
import VideoPlayerLayout from "../components/video-player-layout.js";
import Video from "../components/video.js";
import Title from "../components/title.js";
import PlayPause  from "../components/play-pause.js";
import Timer  from "../components/timer.js";
import Controls from "../components/video-player-controls.js"



class VideoPlayer  extends Component {

	state = {

		pause: false,
		duration: 0,
	}	



	componentDidMount() {
		this.setState({

			pause: (!this.props.autoplay)
		})
	}

	
	handleToggleClickPlayPause = (event) => {
		this.setState({
			pause: !this.state.pause
		})
	}	


	handleLoadedMetadata = event => {

		//Llamando a quien disparó el evento
		this.video = event.target;

		this.setState({
			duration: this.video.duration

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
				handleLoadedMetadata = {this.handleLoadedMetadata}
				/>

				<Controls>

					<Timer 
						duration = {this.state.duration}
					/>

					<PlayPause 
						handleClick = {this.handleToggleClickPlayPause}
						pause = {this.state.pause}
					/>

				</Controls>

			</VideoPlayerLayout>
		)
	}

}

export default VideoPlayer;


/*
Para hacer jsx con react hay que aplicar camelcase a los atirbutos html
*/