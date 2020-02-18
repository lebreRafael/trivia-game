import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import rootReducer from '../redux/reducers';

function renderWithRedux(component, options = {}) {
  const {
    initialState,
    store = createStore(rootReducer, initialState),
    ...rest
  } = options;
  return render(<Provider store={store}>{component}</Provider>, rest);
}

export default renderWithRedux;
