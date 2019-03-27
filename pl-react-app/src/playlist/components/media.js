/*IMPORTACION DE RECURSOS
==========================*/

	import React, { PureComponent } from "react"
	import "./media.css"


class Media extends PureComponent {

		//metodo principal
		render() {

			
			/*PROPS DE MI COMPONENTE
			=========================*/
			const {
				image, 
				title, 
				author,
			} = this.props;

		/*ESO ES JSX*/
			return (
			<div className="Media" onClick={this.props.handleClick}>
				<div className="Media-cover">
					<div> 
						<img src= {image}
							 alt="Cover estoicismo" 
							 width="90%"
							 height={160}
							 className="Media-image"
						/>
					</div>

					<h3 className="Media-title">{title}</h3>

					<p className="Media-author">{author}</p>
				</div>
			</div>
				)
		} 
}

export default Media;
