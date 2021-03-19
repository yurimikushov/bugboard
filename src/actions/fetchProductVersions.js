import { FETCH_PRODUCT_VERSIONS } from '../constants/actionTypes'
import { fetchProductVersions as fetchProductVersionList } from '../api'

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

const fetchProductVersions = (productId) => async (dispatch) => {
  dispatch(fetchProductVersionFetching())

  try {
    dispatch(
      fetchProductVersionSuccess(await fetchProductVersionList(productId))
    )
  } catch (err) {
    dispatch(fetchProductVersionError("Couldn't get data :("))
  }
}

export default fetchProductVersions
