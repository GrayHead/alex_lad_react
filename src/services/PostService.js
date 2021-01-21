export class PostService {

	url = 'https://jsonplaceholder.typicode.com/posts';

	getAllPosts() {
		return fetch(this.url).then(value => value.json());
	}


	getAllPostsByUser(userId) {
		return fetch(this.url + `?userId=${userId}`).then(value => value.json());

	}

}
