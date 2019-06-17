import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {

	handleClick = () => {
		this.props.deletePost(this.props.post.id);
		this.props.history.push("/"); // redirect to homepage
	}

	render() {
		console.log(this.props); // has deletePost method and the id we need for it as a parameter
		// const post = this.state.post ? (
		const post = this.props.post ? ( // we got new props, so state is out
			<div className="post">
				<h4>
					{/* {this.state.post.title} */}
					{this.props.post.title}
				</h4>
				<p>
					{/* {this.state.post.body} */}
					{this.props.post.body}
				</p>
				<div className="center">
					<button className="btn grey" onClick={this.handleClick}>
						Delete Post
					</button>
				</div>
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

const mapStateToProps = (state, ownProps) => { // (ownProps) refers to the props of the component before we attach the additional props from the redux store (warehouse)
	let id = ownProps.match.params.post_id; // post_id because that's what we called its "Route path" in App.js
	return {
		// cycle through posts on the state object and check if the post.id matches the new id
		// post: state.posts.find((post) => {
		// 	return post.id === id
		// })
		post: state.posts.find(post => post.id === id) // shorten if returning only one line
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deletePost: (id) => {
			dispatch({
				type: "DELETE_POST",
				id: id
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);

