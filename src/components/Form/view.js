import React from 'react';
import styled from 'styled-components';
import TextInput from '../TextInput';
import Button from '../Button';

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

const FormView = ({
	title,
	value,
	inputPlaceholder,
	buttonLabel,
	onChangeTextInput,
	onSaveText
}) => {
	return (
		<Wrapper>
			<Title>{title}</Title>
			<FormWrapper>
				<TextInput
					placeholder={inputPlaceholder}
					onChangeTextInput={onChangeTextInput}
					value={value}
				/>
				<Button label={buttonLabel} onSaveText={onSaveText} />
			</FormWrapper>
		</Wrapper>
	);
};

export default FormView;
