import React, {Component} from 'react';

class Post extends Component {


	render() {

		let {item} = this.props;
		return (
			<div>
				<h3>{item.title}</h3>
				<div>{item.body}</div>
				<hr/>

			</div>
		);
	}
}

export default Post;
