import { FETCH_PRODUCT_VERSIONS } from '../constants/action-types'

const initialState = {
  isFetching: false,
  data: [],
  error: '',
}

const productVersionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_VERSIONS.FETCHING:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_PRODUCT_VERSIONS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload.data,
      }
    case FETCH_PRODUCT_VERSIONS.ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      }
    default:
      return state
  }
}

export default productVersionsReducer
