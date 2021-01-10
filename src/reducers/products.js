import { FETCH_PRODUCTS } from '../constants/ActionTypes'

export default function products(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload
    default:
      return state
  }
}
