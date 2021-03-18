const products = [
  { id: '1', title: 'Product #1' },
  { id: '2', title: 'Product #2' },
  { id: '3', title: 'Product #3' },
]

const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export { fetchProducts }
