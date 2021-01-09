import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Content from './components/Content'

function BugboardApp({ loadProducts }) {
  // eslint-disable-next-line
  useEffect(() => loadProducts(), [])

  return (
    <div style={{ maxWidth: '950px', margin: '0 auto' }}>
      <div className='container vh-100 shadow-lg bg-white'>
        <Router>
          <Header />
          <Content />
        </Router>
      </div>
    </div>
  )
}

BugboardApp.propTypes = {
  products: PropTypes.array,
  loadProducts: PropTypes.func,
}

export default BugboardApp
