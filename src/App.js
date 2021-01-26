import React, {Component} from 'react';
import User from './User';

const usersList = [
	{name: 'vasya', age: 31, status: false},
	{name: 'petya', age: 30, status: true},
	{name: 'kolya', age: 29, status: true},
	{name: 'olya', age: 28, status: false},
	{name: 'max', age: 30, status: true},
	{name: 'anya', age: 31, status: false},
	{name: 'oleg', age: 28, status: false},
	{name: 'andrey', age: 29, status: true},
	{name: 'masha', age: 30, status: true},
	{name: 'olya', age: 31, status: false},
	{name: 'max', age: 31, status: true}
];

class App extends Component {

	state = {users: []};
	userIndex = 0;

	render() {
		let {users} = this.state;
		return (
			<div>
				{

					users.map((value, index) => <User item={value} key={index}/>)
				}


				<button onClick={this.add}> add</button>
				<button onClick={this.remove}> remove</button>

			</div>
		);
	}

	add = () => {
		let {users} = this.state;
		users.push(usersList[this.userIndex]);
		this.setState({users});
		this.userIndex++;
		console.log(users);
	};

	remove = () => {
		let {users} = this.state;
		users.pop();
		this.setState({users});
		this.userIndex--;
	};
}

export default App;
