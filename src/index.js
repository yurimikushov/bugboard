import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as StoreProvider } from 'react-redux'
import store from './store'
import './index.css'
import Bugboard from './containers/BugboardApp'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Bugboard />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
