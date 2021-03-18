export const fetchProducts = async () => {
  const res = await fetch('http://localhost:3004/products')

  if (!res.ok) {
    return Promise.reject(res)
  }

  return res.json()
}
