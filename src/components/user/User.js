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
		console.log(this.props);
		let {item, match: {url}} = this.props;
		console.log(url);
		return (
			<div>
				{item.id} - {item.name}
				<button>
					<Link to={url + '/' + item.id}>
						full info
					</Link>
				</button>
			</div>
		);
	}
}

export default withRouter(User);
// export default User;
