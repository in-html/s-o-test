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

const Button = ({ label, onSaveText }) => {
	return <ButtonStyled onClick={onSaveText}>{label}</ButtonStyled>;
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onSaveText: PropTypes.func.isRequired
};

export default Button;
