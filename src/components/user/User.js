import React, {Component} from 'react';
import './User.css';

class User extends Component {

	constructor(props) {
		super(props);
		let {item} = this.props;
		this.state = {user: item};
	}


	onSelectUser = (id) => {
		let {onSelectUser} = this.props;
		onSelectUser(id);

	};

	render() {
		let {user} = this.state;
		return (
			<h3>
				{user.name}
				<button onClick={()=> this.onSelectUser(user.id)}>select this user</button>
			</h3>
		);
	}

}

export default User;
