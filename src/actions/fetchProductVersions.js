import { FETCH_PRODUCT_VERSIONS } from '../constants/ActionTypes'

export default function fetchProductVersions(productId) {
  return async (dispatch) => {
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
}

function fetchProductVersionFetching() {
  return {
    type: FETCH_PRODUCT_VERSIONS.FETCHING,
  }
}

function fetchProductVersionSuccess(productVersions) {
  return {
    type: FETCH_PRODUCT_VERSIONS.SUCCESS,
    payload: {
      data: productVersions,
    },
  }
}

function fetchProductVersionError(error) {
  return {
    type: FETCH_PRODUCT_VERSIONS.ERROR,
    payload: {
      error: error,
    },
  }
}
