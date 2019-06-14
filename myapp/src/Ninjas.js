import React, { Component } from 'react';

class Ninjas extends Component {
	render() {
		// we get this.props automatically on class based components
		// console.log(this.props);

		// the line below creates three variables and stores corresponding props under them
		const { name, age, belt } = this.props;
		return (
			<div className="ninja">
				<div>Name: { name }</div>
				<div>Age: { age }</div>
				<div>Belt: { belt }</div>
			</div>
		)
	}
}

export default Ninjas;

