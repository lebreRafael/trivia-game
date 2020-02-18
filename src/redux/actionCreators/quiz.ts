import { loadQuestionsRequest } from 'api';
import { setRequestError, setRequestPending, setRequestSuccess } from 'redux/actionCreators/app';
import { Answer, Question, QuizActionTypes } from 'types/redux/quiz';

export function loadQuestions() {
  return async (dispatch: (action: object) => void) => {
    dispatch(setRequestPending());
    try {
      const parsedResponse = await loadQuestionsRequest();
      dispatch(setRequestSuccess());
      dispatch(setQuizQuestions(parsedResponse.results));
    } catch (error) {
      dispatch(setRequestError(error));
    }
  };
}

export function setAnswer(questionNumber: number, value: Answer):QuizActionTypes {
  return {
    questionNumber,
    type: 'SET_QUIZ_ANSWER',
    value,
  };
}

/**
 * No need to be exported
 * @param payload
 */
function setQuizQuestions(payload: Question[]):QuizActionTypes {
  return {
    type: 'SET_QUIZ_QUESTIONS',
    payload,
  };
}
