import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import async from 'middleware/async'


export default ({ children, innitialState = {}}) => {
  const store = createStore(
    reducers,
    innitialState,
    applyMiddleware(async)
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
