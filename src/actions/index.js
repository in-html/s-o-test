export const CHANGE_INPUT_TEXT = 'CHANGE_INPUT_TEXT';

export const changeInputText = text => {
	return {
		type: CHANGE_INPUT_TEXT,
		text
	};
};
