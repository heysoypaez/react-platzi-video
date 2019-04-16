import React , {Component} from "react";

import VideoPlayerLayout from "../components/video-player-layout.js";

import Video from "../components/video.js";
import Title from "../components/title.js";

import Controls from "../components/video-player-controls.js";

//Controls
import PlayPause  from "../components/play-pause.js";
import Timer  from "../components/timer.js";
import ProgressBar from "../components/progress-bar.js";
import Spinner from "../components/spinner.js";
import Volume from "../components/volume.js"

import formattedTime from "../../utilities/utilities.js"



class VideoPlayer  extends Component {

	state = {

		pause: false,

		duration: 0,
		durationFormatted: 0,

		currentTime: 0,
		currentTimeFormatted: 0,

		loading: false,

		volumeClicked: false,
		volumeLast: 0,
		volume: 1
	}	


	componentDidMount() {
		this.setState({

			pause: (!this.props.autoplay)
		})
	}

	handleToggleClickPlayPause = event => {

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

	handleVolumeChange = event => {

		if (!this.state.volumeClicked) {

			this.setState({
			volume: event.target.value,
			})

			this.video.volume = this.state.volume;
		}
	}

	handleClickVolume = event => {


		const MUTED = 0;

		
		if(!this.state.volumeClicked) {
		
			this.setState({
				volumeClicked: !this.state.volumeClicked,
				volumeLast: this.state.volume,
				volume: MUTED
			})

			this.video.volume = this.state.volume;
		}

		else {

			this.setState({
				volumeClicked: !this.state.volumeClicked,
				volume: this.video.volumeLast
			})

			this.video.volume = this.state.volume;
		}
	}

	render() {

		return(
			<VideoPlayerLayout>
				<Title title="Crea cambio relevante" />

				<Video 
					autoplay = {this.props.autoplay}
					src= "file:///C:/Users/Daniel/Videos/video-prueba.webm"
						 //"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
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

					<Volume 

						handleChange={this.handleVolumeChange}
						handleClick={this.handleClickVolume}
						value={this.state.volume}
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