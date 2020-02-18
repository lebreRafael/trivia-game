export interface AppState {
  error: object | null
  isLoading: boolean
}

interface resetAppRequestError {
  type: 'RESET_APP_REQUEST_ERROR'
}

interface setAppRequestPending {
  type: 'SET_APP_REQUEST_PENDING'
}

interface setAppRequestSuccess {
  type: 'SET_APP_REQUEST_SUCCESS'
}

interface setAppRequestError {
  type: 'SET_APP_REQUEST_ERROR'
  error: object
}

export type AppActionTypes = resetAppRequestError
  | setAppRequestPending
  | setAppRequestSuccess
  | setAppRequestError
