import { FETCH_BUGS } from '../constants/ActionTypes'

const fetchBugsFetching = () => ({
  type: FETCH_BUGS.FETCHING,
})

const fetchBugsSuccess = (bugs) => ({
  type: FETCH_BUGS.SUCCESS,
  payload: {
    data: bugs,
  },
})

const fetchBugsError = (error) => ({
  type: FETCH_BUGS.ERROR,
  payload: {
    error: error,
  },
})

const fetchBugs = (productId, versionId) => (dispatch) => {
  dispatch(fetchBugsFetching())

  fetch(
    `http://localhost:3004/products/${productId}/versions/${versionId}/bugs`
  )
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res)
      }

      return res.json()
    })
    .then((bugs) => dispatch(fetchBugsSuccess(bugs)))
    .catch(() => {
      dispatch(fetchBugsError("Couldn't get data :("))
    })
}

export default fetchBugs
