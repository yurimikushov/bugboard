import { FETCH_BUGS } from '../constants/action-types'

const initialState = {
  isFetching: false,
  data: [],
  error: '',
}

const bugsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BUGS.FETCHING:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_BUGS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload.data,
      }
    case FETCH_BUGS.ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      }
    default:
      return state
  }
}

export default bugsReducer
