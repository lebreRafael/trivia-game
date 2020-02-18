import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderWithRedux from '../../testUtils/renderWithRedux';
import Home from './Home';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useLocation: () => ({
    pathname: '/',
  }),
}));

test('title is right', async () => {
  document.title = 'Trivia Game';
  renderWithRedux(<Home />, { wrapper: MemoryRouter });
  expect(document.title).toBe('Trivia Game | Home');
});

test('render all information', async () => {
  const { getByText } = renderWithRedux(<Home />, { wrapper: MemoryRouter });
  expect(getByText('Welcome to the Trivia Challenge!')).toBeInTheDocument();
  expect(getByText('You will be presented with 10 True or False questions')).toBeInTheDocument();
  expect(getByText('Can you score 100%?')).toBeInTheDocument();
  expect(getByText('Begin')).toBeInTheDocument();
});
