import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'
import store from './redux/store'
import Header from './components/Header'
import Content from './components/Content'

function BugboardApp() {
  return (
    <div style={{ maxWidth: '950px', margin: '0 auto' }}>
      <div className='container vh-100 shadow-lg bg-white'>
        <Router>
          <Header />
          <StoreProvider store={store}>
            <Content />
          </StoreProvider>
        </Router>
      </div>
    </div>
  )
}

export default BugboardApp
