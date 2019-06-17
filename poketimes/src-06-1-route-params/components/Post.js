import React, { Component } from "react";

class Post extends Component {

	state = {
		id: null // null at the start but when componentDidMount() fires set it to the new value
	}

	componentDidMount() { // when using the react router you can always console.log(this.props) and hook onto the information in there
		// console.log(this.props);
		let postID = this.props.match.params.post_id;
		this.setState({
			id: postID
		})
	}

	render() {
		return (
			<div className="container">
				<h4>
					{this.state.id}
				</h4>
			</div>
		)
	}
}

export default Post

