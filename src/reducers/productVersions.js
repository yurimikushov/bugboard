import {
  FETCH_PRODUCT_VERSIONS_FETCHING,
  FETCH_PRODUCT_VERSIONS_SUCCESS,
  FETCH_PRODUCT_VERSIONS_ERROR,
} from '../constants/ActionTypes'

const initialState = {
  isFetching: false,
  data: [],
  error: '',
}

export default function productVersionsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_VERSIONS_FETCHING:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_PRODUCT_VERSIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.data,
      }
    case FETCH_PRODUCT_VERSIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}
