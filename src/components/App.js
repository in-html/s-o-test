import React, { Component } from 'react';
import styled from 'styled-components';
import FormContainer from '../containers/FormContainer';
import IframeContainer from '../containers/IframeContainer';

const Wrapper = styled.div`
	padding: 20px;
`;

class App extends Component {
	render() {
		return (
			<Wrapper>
				<IframeContainer />
				<FormContainer />
			</Wrapper>
		);
	}
}

export default App;
