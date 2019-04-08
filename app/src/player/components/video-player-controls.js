import React from "react";
import "./video-player-controls.css";

const VideoPlayerControls = (props) => {




	return(
		<section className="VideoPlayerControls">
			{props.children}
		</section>

	)

}


export default VideoPlayerControls;