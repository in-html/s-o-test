import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormContainer from '../containers/FormContainer';
import * as actions from '../actions';

class IframeContainer extends Component {
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
		if (this.frameRef) {
			this.frameRef.contentWindow.postMessage({ message: text }, '*');
		} else {
			alert('Iframe not loaded');
		}
	};

	render() {
		return (
			<div>
				<iframe
					ref={frame => (this.frameRef = frame)}
					width={'100%'}
					height={200}
					title={'title'}
					name="target"
					src={'/'}
					sandbox="allow-scripts"
				/>
				<FormContainer onSend={this.handleSendMessage} />
			</div>
		);
	}
}

export default connect()(IframeContainer);
