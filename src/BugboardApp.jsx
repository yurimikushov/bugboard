import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from './components/Header'
import Content from './components/Content'

function BugboardApp() {
  const history = useHistory()

  useEffect(() => {
    history.push('/')
    // eslint-disable-next-line
  }, [])

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
