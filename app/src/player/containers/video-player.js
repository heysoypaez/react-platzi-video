import React , {Component} from "react";
import VideoPlayerLayout from "../components/video-player-layout.js";


class VideoPlayer  extends Component {

	render() {



		return(
			<VideoPlayerLayout>

				<video
				 controls
				 src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
				 />
			</VideoPlayerLayout>
		)
	}

}

export default VideoPlayer;


/*
Para hacer jsx con react hay que aplicar camelcase a los atirbutos html
*/