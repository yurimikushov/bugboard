export function loadBugs(productId, versionId) {
  return {
    type: 'LOAD_BUGS_LIST',
    payload: { productId, versionId },
  }
}
