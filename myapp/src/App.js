import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>My first react app</h1>
				<p>Welcome :)</p>
				<Ninjas name="Ryu" age="25" belt="black" />
				<Ninjas name="Yoshi" age="30" belt="green" />
			</div>
		);
	}
}

export default App;

