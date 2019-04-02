import React , {Component} from "react";
import SearcherLayout from "../components/searcher-layout.js"


class Searcher extends Component {

	state = {
		value: "Luis Fonsi soy"
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log("submit: " , this.input.value)
	}

	setInputRef = ($element) => {
		this.input = $element;
	}

	handleInputChange = (event) => {
		this.setState({

			value: event.target.value.replace(" ","-")
		})
	}

	render() {

		return(
			<SearcherLayout 
				handleChange={this.handleInputChange}
				handleSubmit={this.handleSubmit}
				setRef={this.setInputRef}
				value={this.state.value}
			/>
		)
	}
}

export default Searcher;

/*
Este componente manejara su propio estado
*/