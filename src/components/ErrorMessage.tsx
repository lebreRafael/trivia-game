import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetRequestError } from 'redux/actionCreators/app';
import { RootState } from 'redux/reducers';
import './ErrorMessage.css';

function getHumanMessage(errorMessage: string) {
  if (errorMessage.indexOf('Failed to fetch') !== -1) return 'Connection failure';
  return 'Unexpected error';
}

function ErrorMessage() {
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.app.error);
  const errorMessage = error ? error.toString() : null;

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        dispatch(resetRequestError());
      }, 5000);
    }
  }, [dispatch, errorMessage]);

  if (errorMessage === null) return null;
  return (
    <div className="error-message">
      {getHumanMessage(errorMessage)}
    </div>
  );
}

export default ErrorMessage;
