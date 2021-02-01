import {GET_USERS, GET_USER} from './action.types';


export const getUsers = (dispatch) => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(value => value.json())
		.then(value => {
			dispatch({type: GET_USERS, payload: {users: value}});
		});
};


export const getUser = (dispatch, id) => {
	fetch('https://jsonplaceholder.typicode.com/users/' + id)
		.then(value => value.json())
		.then(value => {
			dispatch({type: GET_USER, payload: {user: value}});
		});
};

