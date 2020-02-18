import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { setAnswer } from 'redux/actionCreators/quiz';
import { Answer } from 'types/redux/quiz';
import { QuizRouteParams } from 'types/routes/quiz';
import './AnswerButton.css';

interface Props {
  value: Answer
}

function AnswerButton(props: Props) {
  const { value } = props;

  const params = useParams<QuizRouteParams>();
  const { questionNumber } = params;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    const parsedQuestionNumber = parseInt(questionNumber);
    const nextRoute = questionNumber === '10' ? '/results' : '/quiz/' + (parsedQuestionNumber + 1);
    history.push(nextRoute);
    dispatch(setAnswer((parsedQuestionNumber - 1), value));
  };

  return (
    <button
      className="answer-button"
      onClick={handleClick}
      type="button"
    >
      {value}
    </button>
  );
}

export default AnswerButton;
