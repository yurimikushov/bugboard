export const fetchBugs = async (productId, versionId) => {
  const res = await fetch(
    `http://localhost:3004/products/${productId}/versions/${versionId}/bugs`
  )

  if (!res.ok) {
    return Promise.reject(res)
  }

  return res.json()
}
