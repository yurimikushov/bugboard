import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import ProductList from './pages/ProductList'
import ProductVersionList from './pages/ProductVersionList'
import BugList from './pages/BugList'

const BugboardApp = ({ appTitle }) => {
  const history = useHistory()

  useEffect(() => {
    history.push('/')
    /* eslint "react-hooks/exhaustive-deps": "off" */
  }, [])

  useEffect(() => {
    document.title = appTitle
  }, [appTitle])

  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route
          exact
          path='/products/:productId/versions'
          component={ProductVersionList}
        />
        <Route
          exact
          path='/products/:productId/versions/:versionId/bugs'
          component={BugList}
        />
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
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
