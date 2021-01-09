import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'
import store from './store'
import './index.css'
import Bugboard from './containers/BugboardApp'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreProvider store={store}>
        <Bugboard />
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
