const getProductTitle = (products, id) => {
  const product = products.find((product) => product.id === id)

  return (product && product.title) || ''
}

export { getProductTitle }
