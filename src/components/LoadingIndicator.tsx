import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import './LoadingIndicator.css';

function LoadingIndicator() {
  const isLoading = useSelector((state: RootState) => state.app.isLoading);

  if (!isLoading) return null;
  return (
    <div className="loading-indicator" title="Loading ..." />
  );
}

export default LoadingIndicator;
