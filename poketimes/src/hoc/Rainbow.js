import React from "react";

const Rainbow = (WrappedComponent) => { // when you use withRouter t wrap a component you receive the wrapped component as a parameter

	const colours = ["red", "pink", "orange", "blue", "green", "yellow"];
	// const randomColour = colours[Math.floor(Math.random() * 5)];
	const randomColour = colours[Math.floor(Math.random() * colours.length )];
	console.log(randomColour);
	const classNameColor = randomColour + "-text"; // materilize.css class stuff

	return (props) => {
		return (
			<div className={classNameColor}>
				<WrappedComponent {...props} />
			</div>
		)
	}

}

export default Rainbow;

