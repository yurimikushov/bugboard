export default function productVersions(state = [], action) {
  switch (action.type) {
    case 'LOAD_PRODUCT_VERSIONS':
      return action.payload
    default:
      return state
  }
}
