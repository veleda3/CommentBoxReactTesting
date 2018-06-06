import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';

export default ({ children, innitialState = {}}) => {
  const store = createStore(
    reducers,
    innitialState,
    applyMiddleware(reduxPromise)
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
