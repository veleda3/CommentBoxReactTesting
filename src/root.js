import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

export default ({ children, innitialState = {}}) => {
  return (
    <Provider store={createStore(reducers, innitialState)}>
      {children}
    </Provider>
  );
};
