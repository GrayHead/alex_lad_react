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
import Home from './components/home/Home';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path={'/'} exact={true} render={() => <Home/>}/>
						<Route path={'/users'} render={() => <Users/>}/>
						{/*<Route path={'/posts'} render={() => <Posts/>}/>*/}


					</Switch>

				</div>
			</Router>
		);
	}
}

export default App;
