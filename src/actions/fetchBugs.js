import { FETCH_BUGS } from '../constants/ActionTypes'

export default function fetchBugs(productId, versionId) {
  return (dispatch) => {
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
      .catch((err) => {
        console.log(err)
        dispatch(fetchBugsError("Couldn't get data :("))
      })
  }
}

function fetchBugsFetching() {
  return {
    type: FETCH_BUGS.FETCHING,
  }
}

function fetchBugsSuccess(bugs) {
  return {
    type: FETCH_BUGS.SUCCESS,
    payload: {
      data: bugs,
    },
  }
}

function fetchBugsError(error) {
  return {
    type: FETCH_BUGS.ERROR,
    payload: {
      error: error,
    },
  }
}
