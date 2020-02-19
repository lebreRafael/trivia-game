/* eslint-disable react/no-danger */ // We receive an html from the API :(

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SvgIcon from 'components/SvgIcon';
import useDocumentTitle from 'hooks/useDocumentTitle';
import useRedirectHome from 'hooks/useRedirectHome';
import { RootState } from 'redux/reducers';
import './Results.css';

function Results() {
  const questions = useSelector((state: RootState) => state.quiz.questions);
  const correctAnswersCounter = questions.reduce((accumulator, data) => {
    if (data.answer === data.correct_answer) return accumulator + 1;
    return accumulator;
  }, 0);

  useDocumentTitle();
  useRedirectHome();

  if (questions.length === 0) return null;
  return (
    <div className="route results">
      <div className="results__score">
        <span className="results__text">You scored</span>
        <span className="results__text">{correctAnswersCounter + ' / 10'}</span>
      </div>
      <ul className="results__questions-list">
        {questions.map((data) => {
          const { answer, correct_answer, question } = data;
          const isRight = answer === correct_answer;
          const className = 'results__question-container ' + (isRight ? 'right' : 'wrong');
          return (
            <li className={className} key={question}>
              <SvgIcon name={isRight ? 'feather-plus-circle' : 'feather-minus-circle'} />
              <span className="results__question" dangerouslySetInnerHTML={{ __html: question }} />
            </li>
          );
        })}
      </ul>
      <Link className="results__play-again" to="/">Play again?</Link>
    </div>
  );
}

export default Results;
