import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderWithRedux from '../../testUtils/renderWithRedux';
import Quiz from './Quiz';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useLocation: () => ({
    pathname: '/quiz/1',
  }),
  useParams: () => ({
    questionNumber: '1',
  }),
}));

test('redirect when redux is empty', async () => {
  renderWithRedux(<Quiz />, { wrapper: MemoryRouter });
  expect(mockHistoryPush).toBeCalledTimes(1);
});

test('title is right', async () => {
  document.title = 'Trivia Game';
  renderWithRedux(<Quiz />, { wrapper: MemoryRouter });
  expect(document.title).toBe('Trivia Game | Quiz 1');
});

test('renders all information', async () => {
  const category = 'Games';
  const question = 'Playstation One is the name of the first Sony console';
  const { getByText } = renderWithRedux(<Quiz />, {
    initialState: {
      quiz: {
        questions: [
          {
            category,
            correct_answer: 'False',
            difficulty: 'Hard',
            question,
            incorrect_answers: ['True'],
            type: 'boolean',
          },
        ],
      },
    },
    wrapper: MemoryRouter,
  });
  expect(getByText(category)).toBeInTheDocument();
  expect(getByText(question)).toBeInTheDocument();
  expect(getByText('1 of 10')).toBeInTheDocument();
  expect(getByText('True')).toBeInTheDocument();
  expect(getByText('False')).toBeInTheDocument();
});
