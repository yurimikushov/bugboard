import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './containers/Header'
import Navigation from './containers/Navigation'
import ProductList from './containers/ProductList'
import ProductVersionList from './containers/ProductVersionList'
import BugList from './containers/BugList'

const BugboardApp = ({ appTitle }) => {
  const history = useHistory()

  // eslint-disable-next-line
  useEffect(() => history.push('/'), [])

  useEffect(() => (document.title = appTitle), [appTitle])

  return (
    <div className='container'>
      <Header />
      <Navigation />
      <main className='content container'>
        <h2 className='content__title'>{appTitle}</h2>
        <Switch>
          <Route exact path='/'>
            <ProductList />
          </Route>
          <Route exact path='/products/:productId/versions'>
            <ProductVersionList />
          </Route>
          <Route exact path='/products/:productId/versions/:versionId/bugs'>
            <BugList />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

BugboardApp.propTypes = {
  appTitle: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  appTitle: state.appTitle,
})

export default connect(mapStateToProps)(BugboardApp)
