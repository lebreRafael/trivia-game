import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'redux/reducers';

function useRedirectHome() {
  const history = useHistory();

  const questions = useSelector((state: RootState) => state.quiz.questions);
  const questionsCount = questions.length;

  useEffect(() => {
    if (questionsCount === 0) history.push('/');
  }, [history, questionsCount]);
}

export default useRedirectHome;
