import User from './User';
import {useState, useEffect} from 'react';

let usersList = [
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

export default function App() {

	let [users, setUsers] = useState(usersList);

	// render()
	return (
		<div>
			{
				users.map((value, index) => <User key={index} item={value}/>)
			}

			<button onClick={() => {
				users.pop();
				setUsers([...users]);
			}}>delete
			</button>
		</div>
	);
}
