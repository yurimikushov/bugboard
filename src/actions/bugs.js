export function loadBugs(productId, versionId) {
  return {
    type: 'LOAD_BUGS',
    payload: { productId, versionId },
  }
}
