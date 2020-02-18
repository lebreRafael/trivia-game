import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useDocumentTitle from 'hooks/useDocumentTitle';
import { loadQuestions } from 'redux/actionCreators/quiz';
import './Home.css';

function Home() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useDocumentTitle();

  /**
   * setButtonDisabled(true) Prevents multiple clicks
   */
  const handleClick = async () => {
    setButtonDisabled(true);
    await dispatch(loadQuestions());
    history.push('quiz/1');
  };

  return (
    <div className="route home">
      <h1 className="home__title">Welcome to the Trivia Challenge!</h1>
      <span className="home__text">You will be presented with 10 True or False questions</span>
      <span className="home__text">Can you score 100%?</span>
      <button
        className="home__begin"
        disabled={buttonDisabled}
        onClick={handleClick}
        type="button"
      >
        Begin
      </button>
    </div>
  );
}

export default Home;
