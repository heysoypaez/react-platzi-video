import React , {Component} from "react";
import "./video-player-layout.css";


const VideoPlayerLayout = (props)  => (

			<section className="VideoPlayer">

				{props.children}
			</section>
)



export default VideoPlayerLayout;
