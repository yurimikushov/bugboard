export function loadProductVersions(id) {
  return {
    type: 'LOAD_PRODUCT_VERSIONS',
    payload: { id },
  }
}
