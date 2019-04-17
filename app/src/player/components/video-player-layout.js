import React from "react";
import "./video-player-layout.css";

const VideoPlayerLayout = (props)  => (

			<section 
				className="VideoPlayer"
				ref={props.setRef }
			>

				{props.children}
			</section>
)



export default VideoPlayerLayout;


//Set ref me permite hacer referencia al elemnto que encapsula a mi player