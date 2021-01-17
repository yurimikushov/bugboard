import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ProductList from './ProductList'
import ProductVersionList from './ProductVersionList'
import BugList from './BugList'

const ContentContainer = ({ appTitle }) => (
  <main className='container'>
    <h2>{appTitle}</h2>
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
)

ContentContainer.propTypes = {
  appTitle: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  appTitle: state.appTitle,
})

export default connect(mapStateToProps)(ContentContainer)
