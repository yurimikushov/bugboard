export const getProductVersions = (productId) =>
  fetch(`http://localhost:3004/products/${productId}/versions`).then((res) => {
    if (!res.ok) {
      return Promise.reject(res)
    }

    return res.json()
  })
