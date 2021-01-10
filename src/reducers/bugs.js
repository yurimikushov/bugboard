export default function bugs(state = [], action) {
  switch (action.type) {
    case 'LOAD_BUGS':
      return action.payload
    default:
      return state
  }
}
