import Users from './components/Users';
import {Route, Switch} from 'react-router-dom';
import FullUser from './components/FullUser';

export default function App() {
	return (
		<div>
			<Users/>

			<hr/>

			<Switch>
				<Route path={'/users/:id'} render={({match: {params: {id}}}) => {
					return <FullUser key={id} userID={id}/>;
				}}/>

			</Switch>

			<hr/>

		</div>
	);
}
