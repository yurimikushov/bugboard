import { FETCH_PRODUCTS } from '../constants/ActionTypes'

export default function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsFetching())

    fetch('http://localhost:3004/products')
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res)
        }

        return res.json()
      })
      .then((products) => dispatch(fetchProductsSuccess(products)))
      .catch(() => dispatch(fetchProductsError("Couldn't get data :(")))
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
