import React, {Component} from 'react';
import {UserService} from '../../services/UserService';
import User from '../user/User';

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
				{
					users.map(value => <User item={value} key={value.id}/>)
				}

			</div>
		);
	}

}

export default Users;
