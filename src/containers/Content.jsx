import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import withNavigation from './WithNavigation'
import ProductList from './ProductList'
import ProductVersionList from './ProductVersionList'
import BugList from './BugList'

const ProductListWithNavigation = withNavigation(ProductList)
const ProductVersionListWithNavigation = withNavigation(ProductVersionList)
const BugListWithNavigation = withNavigation(BugList)

const ContentContainer = () => {
  const history = useHistory()

  // eslint-disable-next-line
  useEffect(() => history.push('/'), [])

  return (
    <Switch>
      <Route exact path='/'>
        <ProductListWithNavigation />
      </Route>
      <Route exact path='/products/:productId/versions'>
        <ProductVersionListWithNavigation />
      </Route>
      <Route exact path='/products/:productId/versions/:versionId/bugs'>
        <BugListWithNavigation />
      </Route>
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  )
}

export default ContentContainer
