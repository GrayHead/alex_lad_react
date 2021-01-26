import {useState, useEffect} from 'react';

export default function User({item}) {

	let [status, setStatus] = useState(item.status);
	let [name, setName] = useState(item.name);

	// cdm
	useEffect(() => {
		console.log('effect 1');
		// cwu
		return ()=> console.log('delete');
	}, []);


	//cdu
	useEffect(() => {
		console.log('effect 2');
	}, [status]);


	return (
		<div>
			{name} - {status.toString()}

			<button onClick={() => {

				setStatus(!status);
				console.log(status);
				setName(name + '!');

			}}> change status
			</button>


		</div>
	);
}
