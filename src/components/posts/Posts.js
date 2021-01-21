import React, {Component} from 'react';
import {PostService} from '../../services/PostService';
import Post from '../post/Post';

class Posts extends Component {

	state = {posts: []};
	postService = new PostService();

	componentDidMount() {
		let {userId} = this.props;
		this.postService.getAllPostsByUser(userId).then(value => this.setState({posts: value}));
	}

	render() {

		let {posts} = this.state;

		return (
			<div>
				{posts.map(value => <Post key={value.id} item={value}/>)}
			</div>
		);
	}
}

export default Posts;
