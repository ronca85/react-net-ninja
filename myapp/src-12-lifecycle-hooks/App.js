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
		newNinja.id = Math.random();
		let ninjasCopy = [...this.state.ninjas, newNinja]; // "spreads" (...) the ninjas by taking all of its elements and the brackets [] are creating a new array, effectively copying the original array. we have to do this and create a copy of an array this way every time we need to manipulate an array in order not to corrupt the original array.
		console.log( this.state.ninjas );
		this.setState({
			ninjas: ninjasCopy
		})
	}

	deleteNinja = (id) => {
		// console.log( id );
		let ninjasFilteredArray = this.state.ninjas.filter(ninja => { // filter is a non-destructive method of "deleting" ninjas from the array
			return ninja.id !== id; // if ids are the same, filter it out. if not, get into the new array
		});
		this.setState({
			ninjas: ninjasFilteredArray
		})
	}

	componentDidMount() {
		console.log("component mounted");
		console.log("for more visit: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("component updated");
		console.log(prevProps, prevState);
	}

	render() {
		return (
			<div className="App">
				<h1>My first react app</h1>
				<p>Welcome :)</p>
				<Ninjas deleteNinja={this.deleteNinja} ninjas={ this.state.ninjas } />
				<AddNinja addNewNinjaProp={ this.addNewNinja } />
			</div>
		);
	}
}

export default App;

