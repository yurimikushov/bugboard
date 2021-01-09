import { combineReducers } from 'redux'
import products from './products'
import bugs from './bugs'

export default combineReducers({
  products,
  bugs,
})
