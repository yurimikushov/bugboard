import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navigation from '../containers/Navigation'
import ProductList from '../containers/ProductList'
import ProductVersionList from '../containers/ProductVersionList'
import BugList from '../containers/BugList'

function Content() {
  return (
    <main className='container'>
      <Navigation />
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
}

export default Content
