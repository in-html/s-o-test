import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import reducer from './reducers';
import App from './components/App';

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);