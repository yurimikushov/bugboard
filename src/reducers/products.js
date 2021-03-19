import { FETCH_PRODUCTS } from '../constants/action-types'

const initialState = {
  isFetching: false,
  data: [],
  error: '',
}

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS.FETCHING:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_PRODUCTS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload.data,
      }
    case FETCH_PRODUCTS.ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      }
    default:
      return state
  }
}

export default productsReducer
