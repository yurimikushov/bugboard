import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const history = createBrowserHistory()

const composedEnhancer = composeWithDevTools(
  applyMiddleware(routerMiddleware(history), thunkMiddleware)
)

const store = createStore(rootReducer(history), composedEnhancer)

export { history, store as default }
