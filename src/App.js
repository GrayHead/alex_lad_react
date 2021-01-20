import React, {Component} from 'react';
import {users} from './db/data';
import './App.css';
import User from './components/user/User';

class App extends Component {

	state = {findUser: null};


	onSelectUser = (id) => {
		let user = users.find(value => value.id == id);
		this.setState({findUser: user});
	};


	render() {
		let {findUser} = this.state;
		return (
			<div>
				{
					users.map((user, index) => <User item={user} key={index} onSelectUser={this.onSelectUser}/>)
				}
				{
					findUser &&
					<h1>{findUser.name}- {findUser.age}</h1>
				}
			</div>
		);
	}
}

export default App;
