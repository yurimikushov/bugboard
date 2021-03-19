import { CHANGE_APP_TITLE_TO } from '../constants/actionTypes'

const appTitleReducer = (state = 'Products', { type }) => {
  switch (type) {
    case CHANGE_APP_TITLE_TO.PRODUCTS:
      return 'Products'
    case CHANGE_APP_TITLE_TO.VERSIONS:
      return 'Versions'
    case CHANGE_APP_TITLE_TO.BUGS:
      return 'Bugs'
    default:
      return state
  }
}

export default appTitleReducer
