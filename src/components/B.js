import {MyContext} from '../index';

export default function B() {
	return (
		<div>
			<MyContext.Consumer>
				{
					(x) => {
						console.log(x);
					}
				}


			</MyContext.Consumer>

		</div>
	);
}
