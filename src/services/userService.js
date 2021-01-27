// export function userService() {
//
// 	const url = 'https://jsonplaceholder.typicode.com/users';
// 	return {
// 		getUsers: () => {
// 			return fetch(url)
// 				.then(value => value.json());
// 		},
// 		getUserById: (id) => {
// 			return fetch(`${url}/${id}`)
// 				.then(value => value.json());
// 		}
//
// 	};
//
// }

class UserService {
	url = 'https://jsonplaceholder.typicode.com/users';

	getUsers = () => {
		return fetch(this.url)
			.then(value => value.json());
	};

	getUserById = (id) => {
		return fetch(`${this.url}/${id}`)
			.then(value => value.json());
	};


}

const userService = new UserService();
export {
	userService
};
