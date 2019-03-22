import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/comments';

export default (props) => {
   return (
     <Provider store={createStore(reducers, {})}>
      {props.children}
     </Provider>
   );
};