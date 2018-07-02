import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import reducer from './reducers';
import App from './components/App';
import IframeContainer from './containers/IframeContainer';

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
	const { logger } = require(`redux-logger`);

	middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={App} />
				<Route path="/iframe" component={IframeContainer} />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);
