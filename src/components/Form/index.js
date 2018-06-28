import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FormView from './view';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}
	componentWillReceiveProps(nextProps) {
		const { text } = this.state;
		if (nextProps.textInput !== '' && nextProps.textInput !== text) {
			this.setState({ text: nextProps.textInput });
		}
	}
	handleChangeTextInput = event => {
		const { textInput } = this.props;
		if (textInput !== '') {
			this.props.dispatch(actions.changeInputText(''));
		}
		this.setState({ text: event.target.value });
	};
	handleSaveText = () => {
		const { textInput } = this.props;
		const { text } = this.state;

		if (textInput !== text) {
			this.props.dispatch(actions.changeInputText(this.state.text));
		}
	};
	render() {
		const { text } = this.state;
		const { inputPlaceholder, buttonLabel, textInput, title } = this.props;
		const value = textInput !== '' ? textInput : text;
		return (
			<FormView
				title={title}
				value={value}
				inputPlaceholder={inputPlaceholder}
				buttonLabel={buttonLabel}
				onChangeTextInput={this.handleChangeTextInput}
				onSaveText={this.handleSaveText}
			/>
		);
	}
}

const mapStateToProps = state => ({
	textInput: state.textInput
});

export default connect(mapStateToProps)(Index);
