import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getUser} from '../redux/action.creator';

export default function FullUser({userID}) {

	let {user_reducer: {user}} = useSelector(store => store);
	let dispatch = useDispatch();

	useEffect(() => {
		getUser(dispatch, userID);
	}, [userID]);

	return (
		<div>
			{user &&
			<span>{user.id}-{user.username}</span>}
		</div>
	);
}
