import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';
import {PostService} from '../../services/PostService';
import Posts from '../posts/Posts';
import Post from '../post/Post';

class User extends Component {

	state = {userPosts: []};

	postService = new PostService();

	render() {
		let {item} = this.props;
		return (
			<div>
				{item.id} - {item.name}
				<button onClick={this.onUserClickPosts}>
					get posts of user
				</button>

				{
					this.state.userPosts.map(value => <Post item={value}/>)

				}
			</div>
		);
	}

	onUserClickPosts = () => {
		let {item} = this.props;
		this.postService.getAllPostsByUser(item.id)
			.then(value => {
				this.setState({userPosts: value});
				console.log(this.state);
			});


	};
}

export default User;
