export const fetchProductVersions = async (productId) => {
  const res = await fetch(
    `http://localhost:3004/products/${productId}/versions`
  )

  if (!res.ok) {
    return Promise.reject(res)
  }

  return res.json()
}
