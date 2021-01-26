import React, {Component} from 'react';

class User extends Component {

	state = {interavlID: 0};


	constructor(props, context) {
		super(props, context);
		console.log('constructor');
	}

	componentDidMount() {
		console.log('componentDidMount');
		let interavlID = setInterval(() => console.log('interval'), 1000);
		this.setState({interavlID});
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate');
		console.log(prevProps, prevState);
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
		let {interavlID} = this.state;
		clearInterval(interavlID);
	}

	render() {
		let {item} = this.props;
		return (
			<div>
				{item.name}

			</div>
		);
	}
}

export default User;
