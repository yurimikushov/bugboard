import { FETCH_PRODUCT_VERSIONS } from '../constants/action-types'

const initialState = {
  isFetching: false,
  data: [],
  error: '',
}

const productVersionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_VERSIONS.FETCHING:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_PRODUCT_VERSIONS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.data,
      }
    case FETCH_PRODUCT_VERSIONS.ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}

export default productVersionsReducer
