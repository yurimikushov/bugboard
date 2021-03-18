import { FETCH_PRODUCTS } from '../constants/action-types'
import { fetchProducts as fetchProductList } from '../api'

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

const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsFetching())

  try {
    dispatch(fetchProductsSuccess(await fetchProductList()))
  } catch (err) {
    dispatch(fetchProductsError("Couldn't get data :("))
  }
}

export default fetchProducts
