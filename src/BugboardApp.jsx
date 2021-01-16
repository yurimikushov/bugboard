import React from 'react'
import Header from './components/Header'
import Content from './containers/Content'

function BugboardApp() {
  return (
    <div style={{ maxWidth: '950px', margin: '0 auto' }}>
      <div className='container vh-100 shadow-lg bg-white'>
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default BugboardApp
