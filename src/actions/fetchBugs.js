import { FETCH_BUGS } from '../constants/action-types'
import { fetchBugs as fetchBugList } from '../api'

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

const fetchBugs = (productId, versionId) => async (dispatch) => {
  dispatch(fetchBugsFetching())

  try {
    dispatch(fetchBugsSuccess(await fetchBugList(productId, versionId)))
  } catch (err) {
    dispatch(fetchBugsError("Couldn't get data :("))
  }
}

export default fetchBugs
