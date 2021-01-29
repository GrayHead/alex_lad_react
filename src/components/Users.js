import {useDispatch, useSelector} from 'react-redux';

export default function Users() {

	const store = useSelector((store) => store);
	console.log(store.reducer);
	let dispatch = useDispatch();
	return (
		<div>
			{
				store.reducer.map((user, index) =>
					<div key={index}>
						{user.name} - {user.age} - <button onClick={() => {
						dispatch({type: 'INCREMENT_AGE', payload: 100});

					}}>info </button></div>
				)

			}

		</div>
	);
}
