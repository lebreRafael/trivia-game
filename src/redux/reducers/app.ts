import { AppActionTypes, AppState } from 'types/redux/app';

export const initialState:AppState = {
  error: null,
  isLoading: false,
};

function resetRequestError(state: AppState) {
  return { ...state, error: null };
}

function setRequestPending(state: AppState) {
  return { ...state, isLoading: true };
}

function setRequestSuccess(state: AppState) {
  return { ...state, isLoading: false };
}

function setRequestError(state: AppState, error: object) {
  return { ...state, error, isLoading: false };
}

export default function reducer(state = initialState, action:AppActionTypes):AppState {
  switch (action.type) {
    case 'RESET_APP_REQUEST_ERROR':
      return resetRequestError(state);
    case 'SET_APP_REQUEST_PENDING':
      return setRequestPending(state);
    case 'SET_APP_REQUEST_SUCCESS':
      return setRequestSuccess(state);
    case 'SET_APP_REQUEST_ERROR':
      return setRequestError(state, action.error);
    default:
  }
  return state;
}
