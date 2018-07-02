import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
	height: 50px;
	background: #00a1ff;
	border: none;
	border-radius: 5px;
	font-size: 23px;
	padding: 10px 30px;
`;

const Button = ({ label, onSend }) => {
	return <ButtonStyled onClick={onSend}>{label}</ButtonStyled>;
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onSend: PropTypes.func.isRequired
};

export default Button;
