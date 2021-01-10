import {
  FETCH_PRODUCTS_FETCHING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from '../constants/ActionTypes'

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
    type: FETCH_PRODUCTS_FETCHING,
  }
}

function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
      data: products,
    },
  }
}

function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    payload: {
      error: error,
    },
  }
}
