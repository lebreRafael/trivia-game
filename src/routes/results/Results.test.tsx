import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderWithRedux from '../../testUtils/renderWithRedux';
import Results from './Results';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useLocation: () => ({
    pathname: '/results',
  }),
}));

test('redirect when redux is empty', async () => {
  renderWithRedux(<Results />, { wrapper: MemoryRouter });
  expect(mockHistoryPush).toBeCalledTimes(1);
});

test('title is right', async () => {
  document.title = 'Trivia Game';
  renderWithRedux(<Results />, { wrapper: MemoryRouter });
  expect(document.title).toBe('Trivia Game | Results');
});

test('renders all information', async () => {
  const questions = [];
  for (let i = 0; i < 10; i++) {
    questions.push({
      answer: i % 2 === 0 ? 'True' : 'False',
      category: 'Games',
      correct_answer: 'False',
      difficulty: 'Easy',
      question: 'Playstation 1 was the first console in the world - ' + i.toString(),
      incorrect_answers: ['True'],
      type: 'boolean',
    });
  }
  const { getByText } = renderWithRedux(<Results />, {
    initialState: {
      quiz: {
        questions,
      },
    },
    wrapper: MemoryRouter,
  });
  expect(getByText('You scored')).toBeInTheDocument();
  expect(getByText('5 / 10')).toBeInTheDocument();
  questions.forEach(({ question }) => {
    expect(getByText(question)).toBeInTheDocument();
  });
  expect(getByText('Play again?')).toBeInTheDocument();
});
