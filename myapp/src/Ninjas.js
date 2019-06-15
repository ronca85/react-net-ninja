import React from 'react';

const Ninjas = ({ ninjas, deleteNinja }) => {
	const ninjaList = ninjas.map(ninja => {
		if (ninja.age > 20) {
			return (
				<div className="ninja" key={ ninja.id }>
					<div>Name: { ninja.name }</div>
					<div>Age: { ninja.age }</div>
					<div>Belt: { ninja.belt }</div>
					<button onClick={ () => {deleteNinja(ninja.id)} }>Delete ninja</button>
					[
						we wrap the deleteNinja function into an arrow function to prevent it running on click
					]
				</div>
			)
		}
		else {
			return null;
		}
	});

	return (
		<div className="ninja-list">
			{ ninjaList }
		</div>
	)
}

export default Ninjas;

