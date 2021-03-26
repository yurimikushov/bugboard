import React from 'react'
import PropTypes from 'prop-types'
import Header from '../containers/Header'
import Navigation from '../containers/Navigation'
import PageTitle from '../containers/PageTitle'

const PageTemplate = ({ children: content }) => (
  <>
    <Header />
    <Navigation />
    <main className='content container'>
      <PageTitle />
      {content}
    </main>
  </>
)

PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}

export default PageTemplate
