import { FETCH_BUGS } from '../constants/ActionTypes'

const initialState = {
  isFetching: false,
  data: [],
  error: '',
}

export default function bugsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BUGS.FETCHING:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_BUGS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.data,
      }
    case FETCH_BUGS.ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}
