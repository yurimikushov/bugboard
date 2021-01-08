import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Navigation from './Navigation'
import ProductList from './ProductList'
import ProductVersionList from './ProductVersionList'
import BugList from './BugList'

function Content() {
  return (
    <main className='container'>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <ProductList />
          </Route>
          <Route path='/versions'>
            <ProductVersionList />
          </Route>
          <Route path='/bugs'>
            <BugList />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}

export default Content
