/* eslint-disable react/no-danger */ // We receive an html from the API :(

import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useDocumentTitle from 'hooks/useDocumentTitle';
import useRedirectHome from 'hooks/useRedirectHome';
import { RootState } from 'redux/reducers';
import { QuizRouteParams } from 'types/routes/quiz';
import AnswerButton from './AnswerButton';
import './Quiz.css';

function Quiz() {
  const params = useParams<QuizRouteParams>();
  const { questionNumber } = params;
  const questionIndex = parseInt(questionNumber) - 1;
  const question = useSelector((state: RootState) => state.quiz.questions[questionIndex]);

  useDocumentTitle();
  useRedirectHome();

  if (!question) return null;
  return (
    <div className="route quiz">
      <span className="quiz__category">{question.category}</span>
      <div className="quiz__question-container">
        <span className="quiz__question" dangerouslySetInnerHTML={{ __html: question.question }} />
      </div>
      <span>{questionNumber + ' of 10'}</span>
      <div className="quiz__answer-buttons">
        <AnswerButton value="True" />
        <AnswerButton value="False" />
      </div>
    </div>
  );
}

export default Quiz;
