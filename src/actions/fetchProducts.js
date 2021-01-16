import { FETCH_PRODUCTS } from '../constants/ActionTypes'
import { getProducts } from '../api'

const fetchProductsFetching = () => ({
  type: FETCH_PRODUCTS.FETCHING,
})

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS.SUCCESS,
  payload: {
    data: products,
  },
})

const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS.ERROR,
  payload: {
    error: error,
  },
})

const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsFetching())

  getProducts()
    .then((products) => dispatch(fetchProductsSuccess(products)))
    .catch(() => dispatch(fetchProductsError("Couldn't get data :(")))
}

export default fetchProducts
