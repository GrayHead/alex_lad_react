import React, {Component} from 'react';
import Users from './components/users/Users';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';
import Posts from './components/posts/Posts';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path={'/'} exact={true} render={() => <Users/>}/>
						<Route path={'/posts/:userId'} render={
							({match: {params: {userId}}}) => {
								return <Posts userId={userId} key={userId}/>;
							}
						}/>
					</Switch>

				</div>
			</Router>
		);
	}
}

export default App;
