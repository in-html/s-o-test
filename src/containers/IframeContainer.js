import React, { Component } from 'react';
import Form from '../components/Form';
import Iframe from 'react-frame-component';

class IframeContainer extends Component {
	render() {
		return (
			<Iframe>
				<Form
					title={'Iframe'}
					inputPlaceholder={'Hello world'}
					buttonLabel={'Send'}
				/>
			</Iframe>
		);
	}
}

export default IframeContainer;
