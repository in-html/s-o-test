import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import * as actions from '../actions';

const Wrapper = styled.div``;

const FormWrapper = styled.div`
	background: #efefef;
	padding: 20px;
	display: flex;
`;

const Title = styled.h2`
	font-size: 20px;
	color: #505050;
`;

class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

	componentWillReceiveProps(nextProps){
    const { textInput } = nextProps;
    const { text } = this.state;
	  if(textInput !== '' && textInput !== text)
	  this.setState({text: textInput});
  }

	handleChangeTextInput = event => {
		const { textInput, dispatch } = this.props;
		if (textInput !== '') {
			dispatch(actions.changeInputText(''));
		}
		const text = event.target.value;
		this.setState({ text });
	};

	render() {
		const { text } = this.state;
		const { textInput, onSend } = this.props;
		const value = textInput !== '' ? textInput : text;

		return (
			<Wrapper>
				<Title>{'Form'}</Title>
				<FormWrapper>
					<TextInput
						placeholder={'Hello world'}
						onChangeTextInput={this.handleChangeTextInput}
						value={value}
					/>
					<Button label={'Send'} onSend={() => onSend(text)} />
				</FormWrapper>
			</Wrapper>
		);
	}
}

const mapStateToProps = state => ({
	textInput: state.textInput
});

export default connect(mapStateToProps)(FormContainer);
