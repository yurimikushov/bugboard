import { FETCH_PRODUCTS } from '../constants/ActionTypes'

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

export function fetchProducts() {
  return {
    type: FETCH_PRODUCTS,
    payload: productList,
  }
}
