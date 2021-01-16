import { FETCH_PRODUCT_VERSIONS } from '../constants/ActionTypes'

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

  fetch(`http://localhost:3004/products/${productId}/versions`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res)
      }

      return res.json()
    })
    .then((versions) => dispatch(fetchProductVersionSuccess(versions)))
    .catch(() => dispatch(fetchProductVersionError("Couldn't get data :(")))
}

export default fetchProductVersions
