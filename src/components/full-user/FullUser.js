import React, {Component} from 'react';
import {UserService} from '../../services/UserService';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';
import Posts from '../posts/Posts';

class FullUser extends Component {
	state = {user: null};

	userService = new UserService();

	componentDidMount() {
		let {id} = this.props;
		this.userService.getUser(id).then(value => this.setState({user: value}));

	}

	render() {
		let {user} = this.state;
		let {match: {url}} = this.props;
		console.log(this.props);
		return (
			<div>

				{
					user &&
					<div>
						{user.username} ------>
						<Link to={url + '/posts'}>
							get user posts
						</Link>

						<Switch>
							<Route path={url + '/posts'} render={({match: {url}}) => {
								let {id} = this.props;
								return <Posts userId={id}/>;


							}}/>


						</Switch>

					</div>

				}
			</div>
		);
	}

}

export default withRouter(FullUser);
