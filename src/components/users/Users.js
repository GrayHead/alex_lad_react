import React, {Component} from 'react';
import {UserService} from '../../services/UserService';
import User from '../user/User';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';
import FullUser from '../full-user/FullUser';

class Users extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {users: []};
		this.userService = new UserService();

	}


	componentDidMount() {
		this.userService.getAllUsers().then(value => this.setState({users: value}));

	}


	render() {
		let {users} = this.state;
		return (
			<div>

				<div>
					{
						users.map(value => <User item={value} key={value.id}/>)
					}
				</div>
				<hr/>
				<Switch>
					<Route path={'/users/:id'} render={({match: {params: {id}}}) => {

						return <FullUser key={id} id={id}/>;
					}}/>


				</Switch>

			</div>
		);
	}

}

export default Users;
