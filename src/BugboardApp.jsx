import React from 'react'
import Header from './components/Header'
import Navigation from './containers/Navigation'
import Content from './containers/Content'

const BugboardApp = () => (
  <div style={{ maxWidth: '950px', margin: '0 auto' }}>
    <div className='container vh-100 shadow-lg bg-white'>
      <Header />
      <Navigation />
      <Content />
    </div>
  </div>
)

export default BugboardApp
