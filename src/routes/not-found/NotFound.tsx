import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();
  useEffect(() => {
    history.push('/');
  }, [history]);

  return null; // Dont show anything until redirect
}

export default NotFound;
