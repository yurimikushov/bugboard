import { FETCH_PRODUCT_VERSIONS } from '../constants/ActionTypes'

const productVersions = [
  {
    productId: '1',
    versions: [
      { id: 'not_fixed', title: 'Not fixed' },
      { id: '1_0_4', title: '1.0.4' },
      { id: '1_0_3', title: '1.0.3' },
      { id: '1_0_2', title: '1.0.2' },
      { id: '1_0_1', title: '1.0.1' },
      { id: '1_0_0', title: '1.0.0' },
      { id: '0_1_0', title: '0.1.0' },
    ],
  },
  {
    productId: '2',
    versions: [
      { id: 'not_fixed', title: 'Not fixed' },
      { id: '1_0_2', title: '1.0.2' },
      { id: '1_0_1', title: '1.0.1' },
      { id: '1_0_0', title: '1.0.0' },
      { id: '0_1_0', title: '0.1.0' },
    ],
  },
  {
    productId: '3',
    versions: [],
  },
]

export default function fetchProductVersions(productId) {
  const versions = productVersions.filter(
    (product) => product.productId === productId
  )[0].versions

  return (dispatch) => {
    dispatch(fetchProductVersionFetching())

    // TODO: add fetch
    new Promise((resolve) => setTimeout(() => resolve(versions), 500))
      .then((versions) => {
        dispatch(fetchProductVersionSuccess(versions))
      })
      .catch((error) => {
        dispatch(fetchProductVersionError(error))
      })
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
