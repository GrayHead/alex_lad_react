export const user_reducer = (initialState = {users: [], user: null}, action) => {
	switch (action.type) {
		case 'GET_USERS':
			let {payload: {users}} = action;
			// {type :'asdad',payload ; {users:[...]}}
			return {...initialState, users};
		case 'GET_USER':

			let {user} = action.payload;
			console.log(user);

			// {users : [] ,user:{}}
			let newVar = {...initialState, user};
			console.log(newVar);
			return newVar;

		default:
			return {...initialState};
	}

};
