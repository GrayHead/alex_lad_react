import {useEffect, useState} from 'react';
import {userService} from '../../services/userService';

export default function FullUser({id}) {

	let [fullUser, setFullUser] = useState(null);

	useEffect(() => {
		userService.getUserById(id).then(value => setFullUser(() => {
			return value;
		}));
	}, [id]);
	return (
		<div>
			{
				fullUser && <span>{fullUser.id} - {fullUser.username}</span>
			}

		</div>
	);
}
