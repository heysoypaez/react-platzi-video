import React , {PureComponent} from "react";
import "./video.css";



class Video  extends PureComponent {



	setRef = element => {

		//This.video es el elemtno html
		this.video = element;
	}
	
	togglePlay() {

		if (this.props.pause) {

			this.video.play();
		}

		else {
			this.video.pause();
		}

	}

	componentDidUpdate(nextProps) {

		/*Ese nuevo Prop lo envia el usuario*/
		if(nextProps.pause !== this.props.pause) {

			this.togglePlay();
		}
	}




	render() {

		const {

			handleLoadedMetadata

		} = this.props

		return(	

			<section className="Video">
			
				<video
				 ref={this.setRef}
				 autoPlay = {this.props.autoplay}
				 src={this.props.src}
				 

				 //Este metodo que estoy llamando es un evento del objeto html media
				 onLoadedMetadata = {handleLoadedMetadata}

				 />

			</section>
		)
	}

}

export default Video;

/*
Necesito obtener la referencia del video propio del html que esta
 en el componente video para usarlo en el contenedor del video

 Para guardarlo como una variable

 Y usar sus metodos

*/