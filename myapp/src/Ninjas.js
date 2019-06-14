import React from 'react';

// in class based components props are automatically attached to the instance of the component and we use this.props to access them
// in function based components we pass props as a parameter and we don't use this.props

// const Ninjas = (props) => {
//	const { ninjas } = props; // this works but we can write it differently

const Ninjas = ({ ninjas }) => { // we can stack multiple props in here, e.g. { ninjas, locations }

	const ninjaList = ninjas.map(ninja => {
		return (
			<div className="ninja" key={ ninja.id }>
				<div>Name: { ninja.name }</div>
				<div>Age: { ninja.age }</div>
				<div>Belt: { ninja.belt }</div>
			</div>
		)
	});

	return (
		<div className="ninja-list">
			{ ninjaList }
		</div>
	)
}

export default Ninjas;

