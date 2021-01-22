import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to={'/users'}>
							to users
						</Link>

					</li>
					{/*<li>*/}
					{/*	<Link to={'/posts'}>*/}
					{/*		to posts*/}
					{/*	</Link>*/}

					{/*</li>*/}
				</ul>
			</div>
		);
	}
}

export default Home;
