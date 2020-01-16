import React, { Component } from 'react';

class Form extends Component {
	// class ?, why use ?, and where take props, why not use functional comp?
	render() {
		return (
			<div>
				<form onSubmit={this.props.getWeather}>
					<input type="text" name="city" placeholder="city" />
					<input type="text" name="country" placeholder="country" />
					<button> find </button>
				</form>
			</div>
		)
	}
}

export default Form;