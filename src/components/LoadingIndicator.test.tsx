import React from 'react';
import renderWithRedux from '../testUtils/renderWithRedux';
import LoadingIndicator from './LoadingIndicator';

test('element is not present', async () => {
  const { queryByTitle } = renderWithRedux(<LoadingIndicator />);
  const loadingBar = queryByTitle('Loading ...');
  expect(loadingBar).not.toBeInTheDocument();
});

test('element is present', async () => {
  const { queryByTitle } = renderWithRedux(<LoadingIndicator />, {
    initialState: {
      app: {
        isLoading: true,
      },
    },
  });
  const loadingBar = queryByTitle('Loading ...');
  expect(loadingBar).toBeInTheDocument();
});
