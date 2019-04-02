import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => { // the '= {}' is an initialization, to avoid 'unsigned' errors
   return (
    <Provider store={createStore(
          reducers,
          initialState,
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )}>
      {children}
    </Provider>
  );
};
