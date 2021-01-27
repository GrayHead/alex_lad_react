import './User.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

export default function User({item}) {
	return (
		<div>
			{item.id} - {item.name} - <Link to={'/users/' + item.id} className={'btn btn-primary'}>go to</Link>
		</div>
	);
}
