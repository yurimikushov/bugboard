import { FETCH_PRODUCT_VERSIONS } from '../constants/ActionTypes'

export default function productVersions(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCT_VERSIONS:
      return action.payload
    default:
      return state
  }
}
