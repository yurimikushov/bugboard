import React from 'react'
import Header from '../containers/Header'
import Navigation from '../containers/Navigation'
import PageTitle from '../containers/PageTitle'
import BugList from '../containers/BugList'

const ProductListPage = () => (
  <>
    <Header />
    <Navigation />
    <main className='content container'>
      <PageTitle />
      <BugList />
    </main>
  </>
)

export default ProductListPage
