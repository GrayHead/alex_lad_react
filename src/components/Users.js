import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../redux/action.creator';
import User from './User';

export default function Users() {
	let {user_reducer: state} = useSelector(store => store);
	const dispatch = useDispatch();

	useEffect(() => {
		getUsers(dispatch);
	}, []);


	return (
		<div>
			{
				state.users.map(value => <User key={value.id} item={value}/>)
			}

		</div>
	);
}
