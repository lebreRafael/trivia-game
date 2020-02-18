import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { QuizRouteParams } from 'types/routes/quiz';

function useDocumentTitle() {
  const location = useLocation();
  const params = useParams<QuizRouteParams>();

  const { pathname } = location;
  const { questionNumber } = params;
  useEffect(() => {
    const mainAppTitle = document.title.split(' | ').splice(0, 1)[0];
    const newTitleParts = [mainAppTitle];
    switch (pathname) {
      case '/':
        newTitleParts.push('Home');
        break;
      case '/quiz/' + questionNumber:
        newTitleParts.push('Quiz ' + questionNumber);
        break;
      case '/results':
        newTitleParts.push('Results');
        break;
      default:
        newTitleParts.push('Not Found');
    }
    document.title = newTitleParts.join(' | ');
  }, [pathname, questionNumber]);
}

export default useDocumentTitle;
