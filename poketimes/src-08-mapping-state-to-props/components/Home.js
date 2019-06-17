import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";
// connect is a function and it brings back a higher order component
// we need to invoke the connect() function and then wrap the component
// connect()(Home)

class Home extends Component {
	render() {
		console.log(this.props)
		const { posts } = this.props; // grab the posts from the props which were definde on the bottom and come from redux (the warehouse)
		const postList = posts.length ? (
			posts.map(post => {
				return (
					<div className="post card" key={post.id}>
						<img src={Pokeball} alt="A Pokeball" />
						<div className="card-content">
							<Link to={"/" + post.id}>
								<span className="card-title red-text">
									{post.title}
								</span>
							</Link>
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
			<div className="container home">
				<h4 className="center">Home</h4>
				{postList}
			</div>
		)
	}
}

// we now need to grab data from the central store "Redux" (warehouse)
// if a component wants some date from the warehouse wee need to map that data to the props of the component
const mapStateToProps = (state) => { // (state) is the state of the warehouse
	return {
		posts: state.posts
	}
}

// mapStateToProps defines what data we want to grab from the warehouse (state.props)
// and what property to apply the props object to (props:)
export default connect(mapStateToProps)(Home);

