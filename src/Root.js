import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import stateValidator from 'middlewares/stateValidator';
import async from 'middlewares/async';

//const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;

export default ({ children, initialState = {} }) => { // the '= {}' is an initialization, to avoid 'unsigned' errors
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(stateValidator, async)
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
