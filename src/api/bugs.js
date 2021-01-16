export const getBugs = (productId, versionId) =>
  fetch(
    `http://localhost:3004/products/${productId}/versions/${versionId}/bugs`
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject(res)
    }

    return res.json()
  })
