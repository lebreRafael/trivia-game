import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderWithRedux from '../testUtils/renderWithRedux';
import ErrorMessage from './ErrorMessage';

test('renders connection failure', async () => {
  const { getByText } = renderWithRedux(<ErrorMessage />, {
    initialState: {
      app: {
        error: new Error('Failed to fetch'),
      },
    },
    wrapper: MemoryRouter,
  });
  expect(getByText('Connection failure')).toBeInTheDocument();
});

test('renders unexpected error', async () => {
  const { getByText } = renderWithRedux(<ErrorMessage />, {
    initialState: {
      app: {
        error: new Error('Test'),
      },
    },
    wrapper: MemoryRouter,
  });
  expect(getByText('Unexpected error')).toBeInTheDocument();
});

test('Error cleanup', async () => {
  const { getByText, queryByText } = renderWithRedux(<ErrorMessage />, {
    initialState: {
      app: {
        error: new Error('Test'),
      },
    },
    wrapper: MemoryRouter,
  });
  expect(getByText('Unexpected error')).toBeInTheDocument();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  expect(queryByText('Unexpected error')).not.toBeInTheDocument();
}, 10000);
