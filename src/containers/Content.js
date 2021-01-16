import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProductList from './ProductList'
import ProductVersionList from './ProductVersionList'
import BugList from './BugList'

const ContentContainer = () => (
  <main className='container'>
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

export default ContentContainer
