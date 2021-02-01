export const post_reducer = (initialState = {users: [], user: null}, action) => {
	switch (action.type) {
		case 'GET_POSTS':
			let {payload: {users}} = action;
			return {...initialState, users};
		case 'GET_POST':

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
