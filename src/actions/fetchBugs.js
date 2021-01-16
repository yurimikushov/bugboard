import { FETCH_BUGS } from '../constants/ActionTypes'
import { getBugs } from '../api'

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

  getBugs(productId, versionId)
    .then((bugs) => dispatch(fetchBugsSuccess(bugs)))
    .catch(() => {
      dispatch(fetchBugsError("Couldn't get data :("))
    })
}

export default fetchBugs
