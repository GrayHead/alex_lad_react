import {combineReducers, createStore} from 'redux';

let users = [
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

export const reducer = (initialState = users, action) => {
	switch (action.type) {
		case 'FIND_ALL':
			return [...initialState];

		case 'FIND_USER':
			let user = users.find((value, index) => index === action.payload);
			return [user];

		case 'INCREMENT_AGE':
			let map = users.map(value => {
				value.age = value.age + action.payload;
				return value;
			});
			console.log(map);
			return [...map];

		default:
			return [...initialState];
	}

};
export const reducer2 = (initialState = [], action) => {
	switch (action.type) {
		case 'FIND_ALL':
			return [...initialState];

		case 'FIND_USER':
			let user = users.find((value, index) => index === action.payload);
			return [user];

		case 'INCREMENT_AGE':
			let map = users.map(value => {
				value.age = value.age + action.payload;
				return value;
			});
			console.log(map);
			return [...map];

		default:
			return [...initialState];
	}

};

let reducers = combineReducers({reducer, reducer2});

export const store = createStore(reducers);
