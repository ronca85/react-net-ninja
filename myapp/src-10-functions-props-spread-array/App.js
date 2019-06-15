import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

	state = {
		ninjas : [
			{ name : "Ryu", age : 30, belt : "black", id : 1 },
			{ name : "Yoshi", age : 25, belt : "green", id : 2 },
			{ name : "Crystal", age : 20, belt : "pink", id : 3 }
		]
	}

	addNewNinja = (newNinja) => {
		// console.log( newNinja ); // newNinja is the state that was imported from the AddNinja component
		newNinja.id = Math.random(); // gives the same id for every new ninja LOL
		let ninjasCopy = [...this.state.ninjas, newNinja]; // "spreads" (...) the ninjas by taking all of its elements and the brackets [] are creating a new array, effectively copying the original array. we have to do this and create a copy of an array this way every time we need to manipulate an array in order not to corrupt the original array.
		console.log( this.state.ninjas );
		this.setState({
			ninjas: ninjasCopy
		})
	}

	render() {
		return (
			<div className="App">
				<h1>My first react app</h1>
				<p>Welcome :)</p>
				<Ninjas ninjas={ this.state.ninjas } />
				<AddNinja addNewNinjaProp={ this.addNewNinja } />
			</div>
		);
	}
}

export default App;

