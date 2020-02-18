/* eslint-disable import/prefer-default-export */

import { AppActionTypes } from 'types/redux/app';

export function resetRequestError():AppActionTypes {
  return {
    type: 'RESET_APP_REQUEST_ERROR',
  };
}

export function setRequestPending():AppActionTypes {
  return {
    type: 'SET_APP_REQUEST_PENDING',
  };
}

export function setRequestSuccess():AppActionTypes {
  return {
    type: 'SET_APP_REQUEST_SUCCESS',
  };
}

export function setRequestError(error: object):AppActionTypes {
  return {
    error,
    type: 'SET_APP_REQUEST_ERROR',
  };
}
