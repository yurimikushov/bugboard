import { FETCH_BUGS } from '../constants/ActionTypes'

export default function bugs(state = [], action) {
  switch (action.type) {
    case FETCH_BUGS:
      return action.payload
    default:
      return state
  }
}
