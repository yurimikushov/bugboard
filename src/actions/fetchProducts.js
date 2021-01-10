import { FETCH_PRODUCTS } from '../constants/ActionTypes'

const products = [
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

export default function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsFetching())

    // TODO: add fetch
    new Promise((resolve, reject) => setTimeout(() => resolve(products), 1000))
      .then((products) => dispatch(fetchProductsSuccess(products)))
      .catch((error) => {
        dispatch(fetchProductsError(error))
      })
  }
}

function fetchProductsFetching() {
  return {
    type: FETCH_PRODUCTS.FETCHING,
  }
}

function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS.SUCCESS,
    payload: {
      data: products,
    },
  }
}

function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS.ERROR,
    payload: {
      error: error,
    },
  }
}
