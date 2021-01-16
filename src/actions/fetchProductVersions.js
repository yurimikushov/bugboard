import { FETCH_PRODUCT_VERSIONS } from '../constants/action-types'
import { getProductVersions } from '../api'

const fetchProductVersionFetching = () => ({
  type: FETCH_PRODUCT_VERSIONS.FETCHING,
})

const fetchProductVersionSuccess = (productVersions) => ({
  type: FETCH_PRODUCT_VERSIONS.SUCCESS,
  payload: {
    data: productVersions,
  },
})

const fetchProductVersionError = (error) => ({
  type: FETCH_PRODUCT_VERSIONS.ERROR,
  payload: {
    error: error,
  },
})

const fetchProductVersions = (productId) => (dispatch) => {
  dispatch(fetchProductVersionFetching())

  getProductVersions(productId)
    .then((versions) => dispatch(fetchProductVersionSuccess(versions)))
    .catch(() => dispatch(fetchProductVersionError("Couldn't get data :(")))
}

export default fetchProductVersions
