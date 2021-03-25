import React from 'react'
import Header from '../containers/Header'
import Navigation from '../containers/Navigation'
import PageTitle from '../containers/PageTitle'
import ProductList from '../containers/ProductList'

const ProductListPage = () => (
  <>
    <Header />
    <Navigation />
    <main className='content container'>
      <PageTitle />
      <ProductList />
    </main>
  </>
)

export default ProductListPage
