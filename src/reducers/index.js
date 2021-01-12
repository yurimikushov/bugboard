import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products'
import productVersions from './productVersions'
import bugs from './bugs'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    products,
    productVersions,
    bugs,
  })

export default createRootReducer
