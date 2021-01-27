import Users from './components/users/Users';

import {BrowserRouter as Router} from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<div>
				<Users/>
			</div>
		</Router>
	);
}
