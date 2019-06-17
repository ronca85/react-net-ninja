import React, { Component } from "react";
import axios from "axios";

class Post extends Component {

	state = {
		// id: null *** after getting the post with axio we don't need the id in the state
		post: null // use post instead, it has an id attached to itself already
	}

	componentDidMount() { // when using the react router you can always console.log(this.props) and hook onto the information in there
		// console.log(this.props);
		let postID = this.props.match.params.post_id;
		axios.get("https:/jsonplaceholder.typicode.com/posts/" + postID)
			.then(res => {
				this.setState({
					post: res.data
				})
				// console.log(res);
			})
		// this.setState({ *** don't need this anymore
		// 	id: postID
		// })
	}

	render() {

		const post = this.state.post ? (
			<div className="post">
				<h4>
					{this.state.post.title}
				</h4>
				<p>
					{this.state.post.body}
				</p>
			</div>
		) : (
			<div className="center">Loading post...</div>
		)

		return (
			<div className="container">
				{ post }
			</div>
		)
	}
}

export default Post

