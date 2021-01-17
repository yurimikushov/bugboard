import { CHANGE_APP_TITLE_TO } from '../constants/action-types'

export const changeAppTitleToProducts = () => ({
  type: CHANGE_APP_TITLE_TO.PRODUCTS,
})

export const changeAppTitleToVersions = () => ({
  type: CHANGE_APP_TITLE_TO.VERSIONS,
})

export const changeAppTitleToBugs = () => ({
  type: CHANGE_APP_TITLE_TO.BUGS,
})
