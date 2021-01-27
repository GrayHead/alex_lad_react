import './Users.css';
import {useEffect, useState} from 'react';
import User from '../user/User';
import {userService} from '../../services/userService';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';
import FullUser from '../full-user/FullUser';

export default function Users() {
	let [users, setUsers] = useState([]);

	// cdm
	useEffect(() => {
		userService.getUsers().then(value => setUsers(() => [...value]));
	}, []);

	return (
		<div>

			{
				users.map(value => <User item={value} key={value.id}/>)
			}


			<Switch>

				<Route path={'/users/:id'} render={({match: {params: {id}}}) => {
					console.log(id);


					return <FullUser id={id} key={id}/>;
				}}/>

			</Switch>

		</div>
	);
}
