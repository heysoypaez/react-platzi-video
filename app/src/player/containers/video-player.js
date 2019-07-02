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
import FullScreen from "../components/fullscreen.js"

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
		volume: 0.7
	}	

	componentDidMount() {
		this.setState({

			pause: (!this.props.autoplay)
		})
	}


	
	/*Video Handlers 
	------------------*/

		handleLoadedMetadata = event => {

			this.video = event.target;

			this.setState({

				duration: this.video.duration,
				durationFormatted: formattedTime(this.video.duration)
			})
		}		

		//Video start loading
		handleSeekingVideo = event => {

			this.setState({
				loading: true
			})
		}

		// Video stop loading
		handleSoughtVideo = event => {

			this.setState({
				loading: false
			})
		}
	
	/*Controls Handlers
	---------------------*/

		// PlayPause 
			handleToggleClickPlayPause = event => {

				this.setState({
					pause: !this.state.pause
				})
			}	

		// Timer 
			handleTimeUpdate = event => {

				this.video = event.target;

				this.setState({
					currentTime: this.video.currentTime,
					currentTimeFormatted: formattedTime( this.video.currentTime )
				})
			}
		 
		// ProgressBar
			handleProgressChange = event => {

				this.video.currentTime = event.target.value
			}

		// Volume 

			handleVolumeChange = event => {

				if (!this.state.volumeClicked) {

					this.setState({
					volume: event.target.value,
					})

					this.video.volume = this.state.volume;
				}
			}

			handleClickVolume = event => {
				
				if(!this.state.volumeClicked) {
						
					const MUTED = 0;

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

		// FullScreen 
			handleClickFullScreen = event => {
			
					function isInFullscreen() {
					  if (document.fullscreenElement) {
					    return true;
					  }
					 
					  	return false;	
					  
					}

					if( !isInFullscreen() ) {
						this.player.requestFullscreen()
					}
					else {
						document.exitFullscreen()
					}
			} 	


		/*Utilities
		-------------*/
			setRef = element => {
				this.player = element;
				this.video = element;
			}

	render() {

		return(
			<VideoPlayerLayout
				setRef={this.setRef}
			>
				<Title title={this.props.title} />

				<Video 
					autoplay = {this.props.autoplay}
					src= {this.props.src}
					pause= {!this.state.pause}

					handleLoadedMetadata = {this.handleLoadedMetadata}
					handleTimeUpdate = {this.handleTimeUpdate}
					handleSeeking = {this.handleSeekingVideo}
					handleSought = {this.handleSoughtVideo}

					setRef={this.setRef}
				/>

				<Controls>

					<PlayPause 
					  pause = {this.state.pause}
						handleClick = {this.handleToggleClickPlayPause}
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

					<FullScreen 
						handleClick={this.handleClickFullScreen}
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