import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider as StoreProvider } from 'react-redux'
import store, { history } from './store'
import './index.css'
import Bugboard from './BugboardApp'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ConnectedRouter history={history}>
        <Bugboard />
      </ConnectedRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
