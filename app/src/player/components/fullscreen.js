import React from "react";
import FullScreenIcon from "../../icons/components/children/full-screen.js";
import "./fullscreen.css";

const FullScreen = (props) => (

		<section 
			className="FullScreen"
			onClick={props.handleClick}
		> 
			<FullScreenIcon size={30} color="pink" />
		</section>
)


export default FullScreen;