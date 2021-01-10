import {
  FETCH_PRODUCTS_FETCHING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from '../constants/ActionTypes'

const initialState = {
  isFetching: false,
  data: [],
  error: '',
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_FETCHING:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.data,
      }
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}
