import { FETCH_PRODUCTS } from '../constants/ActionTypes'

const initialState = {
  isFetching: false,
  data: [],
  error: '',
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS.FETCHING:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_PRODUCTS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.data,
      }
    case FETCH_PRODUCTS.ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}

export default productsReducer
