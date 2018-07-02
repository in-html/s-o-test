import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import FormContainer from '../containers/FormContainer';

class App extends Component {
	componentDidMount() {
		window.addEventListener('message', this.handleFrameTasks);
	}

	componentWillUnmount() {
		window.removeEventListener('message', this.handleFrameTasks);
	}

	handleFrameTasks = e => {
		if (e.data.message) {
			const { dispatch } = this.props;
			const { message } = e.data;
			dispatch(actions.changeInputText(message));
		}
	};

	handleSendMessage = text => {
		window.top.postMessage({ message: text }, '*');
	};

	render() {
		return <FormContainer onSend={this.handleSendMessage} />;
	}
}

export default connect()(App);
