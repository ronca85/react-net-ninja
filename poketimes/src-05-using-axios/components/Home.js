import React, { Component } from "react";
import axios from "axios";

// to use axios and lifecycle hooks we need to convert this compoent into a class-based component

class Home extends Component {

	state = {
		posts: []
	}

	componentDidMount(){
		// axios.get is a promise. it is async and doesn't happen instantly. when it does use .then()
		axios.get("https://jsonplaceholder.typicode.com/posts/")
			.then(res => {
				// console.log(res);
				this.setState({
					posts: res.data.slice(0, 10) // show only first 10 posts from the response
				})
			});
	}

	render() {
		const { posts } = this.state; // grabs posts property from the state
		const postList = posts.length ? (
			posts.map(post => {
				return (
					<div className="post card" key={post.id}>
						<div className="card-content">
							<span className="card-title">
								{post.title}
							</span>
							<p>
								{post.body}
							</p>
						</div>
					</div>
				)
			})
		) : (
			<div className="center">No posts yet</div>
		)
		return (
			<div className="container">
				<h4 className="center">Home</h4>
				{postList}
			</div>
		)
	}
}

export default Home;

