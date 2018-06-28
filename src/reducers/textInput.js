import * as actions from '../actions';

const textInput = (state = '', action) => {
	switch (action.type) {
		case actions.CHANGE_INPUT_TEXT:
			return action.text;
		default:
			return state;
	}
};
export default textInput;
