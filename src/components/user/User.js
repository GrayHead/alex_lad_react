import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

class User extends Component {

	render() {
		let {item} = this.props;
		return (
			<div>
				{item.id} - {item.name}
				<button>
					<Link to={'/posts/' + item.id}>
						posts of user
					</Link>

				</button>
			</div>
		);
	}
}

export default User;
