import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
	border: solid 1px #000;
	padding: 0 20px;
	margin: 0 20px 0 0;
	font-size: 15px;
	background: #fbfbfb;
	color: #000;
	border-radius: 5px;
	height: 50px;
	box-sizing: border-box;
`;

const TextInput = ({ placeholder, onChangeTextInput, value }) => {
	return (
		<Input
			type="text"
			placeholder={placeholder}
			onChange={text => onChangeTextInput(text)}
			value={value}
		/>
	);
};

TextInput.propTypes = {
	placeholder: PropTypes.string.isRequired,
	onChangeTextInput: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
};

export default TextInput;
