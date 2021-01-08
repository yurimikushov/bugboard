import { combineReducers } from 'redux'
import products from './products'
import productVersions from './productVersions'
import bugs from './bugs'

export default combineReducers({
  products,
  productVersions,
  bugs,
})
