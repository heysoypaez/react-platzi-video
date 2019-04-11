import React , {Component} from "react";

import VideoPlayerLayout from "../components/video-player-layout.js";

import Video from "../components/video.js";
import Title from "../components/title.js";

import Controls from "../components/video-player-controls.js";

import PlayPause  from "../components/play-pause.js";
import Timer  from "../components/timer.js";
import ProgressBar from "../components/progress-bar.js";
import Spinner from "../components/spinner.js";

import formattedTime from "../../utilities/utilities.js"



class VideoPlayer  extends Component {

	state = {

		pause: false,

		duration: 0,
		durationFormatted: 0,

		currentTime: 0,
		currentTimeFormatted: 0,

		loading: false
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

			duration: this.video.duration,
			durationFormatted: formattedTime(this.video.duration)
		})



	}

	handleTimeUpdate = event => {

		this.video = event.target;

		this.setState({
			currentTime: this.video.currentTime,
			currentTimeFormatted: formattedTime( this.video.currentTime )
		})
	}

	handleProgressChange = event => {
		this.video.currentTime = event.target.value
	}

	//Video start loading
	handleSeekingVideo = event => {

		this.setState({
			loading: true
		})
	}

	// Video stop loading
	handleSoughtdVideo = event => {


		this.setState({
			loading: false
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
				handleTimeUpdate = {this.handleTimeUpdate}
				handleSeeking = {this.handleSeekingVideo}
				handleSought = {this.handleSoughtVideo}

				/>

				<Controls>

					<PlayPause 
						handleClick = {this.handleToggleClickPlayPause}
						pause = {this.state.pause}
					/>

					<Timer 
						duration = {this.state.durationFormatted}
						currentTime = {this.state.currentTimeFormatted}
					/>

					<ProgressBar
						duration = {this.state.duration}
						value = {this.state.currentTime}
						handleProgressChange = {this.handleProgressChange} 
					 />

				

				</Controls>

				<Spinner 
				active={this.state.loading}
				/>


			</VideoPlayerLayout>
		)
	}

}

export default VideoPlayer;


/*
Para hacer jsx con react hay que aplicar camelcase a los atirbutos html
*/