import React, { Component } from "react"
import HandleErrorLayout from "../components/handle-error-layout.js"


class HandleError extends Component {

	state = {
		handleError: false,
	}

	componentDidCatch(error,info) {
		//Envia este error a un servicio como sentry
		this.setState({
			handleError: true,
		})
	}

	render() {

		if(this.state.handleError) {
			return(
				<HandleErrorLayout />
			)
		}
		return this.props.children
	}
}

export default HandleError;