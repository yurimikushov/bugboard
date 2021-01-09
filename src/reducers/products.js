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

export default function products(state = productList, action) {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      // TODO: fetching from server
      return state
    case 'LOAD_PRODUCT':
      // TODO: fetching from server
      return state.push(
        productList.filter(
          (product) => product.id === action.payload.productId
        )[0]
      )
    default:
      return state  
  }
}
