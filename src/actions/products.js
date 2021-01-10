const productList = [
  {
    id: '1',
    title: 'Product #1',
  },
  {
    id: '2',
    title: 'Product #2',
  },
  {
    id: '3',
    title: 'Product #3',
  },
]

export function loadProducts() {
  return {
    type: 'LOAD_PRODUCTS',
    payload: productList,
  }
}
