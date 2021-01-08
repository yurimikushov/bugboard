import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './Navigation'
import ProductList from './ProductList'
import ProductVersionList from './ProductVersionList'
import BugList from './BugList'

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
        <Route exact path='/products/:productId/versions/:versionId'>
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
