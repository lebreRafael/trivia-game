import {
  Answer,
  Question,
  QuizActionTypes,
  QuizState,
} from 'types/redux/quiz';

export const initialState:QuizState = {
  questions: [],
};

function setAnswer(state: QuizState, questionNumber: number, value: Answer) {
  const newQuestions = [...state.questions];
  newQuestions[questionNumber].answer = value;
  return { ...state, questions: newQuestions };
}

function setQuestions(state: QuizState, value: Question[]) {
  return { ...state, questions: value };
}

export default function reducer(state = initialState, action:QuizActionTypes):QuizState {
  switch (action.type) {
    case 'SET_QUIZ_ANSWER':
      return setAnswer(state, action.questionNumber, action.value);
    case 'SET_QUIZ_QUESTIONS':
      return setQuestions(state, action.payload);
    default:
  }
  return state;
}
