import React from 'react'
import Header from '../containers/Header'
import Navigation from '../containers/Navigation'
import PageTitle from '../containers/PageTitle'
import ProductVersionList from '../containers/ProductVersionList'

const ProductVersionListPage = () => (
  <>
    <Header />
    <Navigation />
    <main className='content container'>
      <PageTitle />
      <ProductVersionList />
    </main>
  </>
)

export default ProductVersionListPage
