export const fetchProducts = () =>
  fetch('http://localhost:3004/products').then((res) => {
    if (!res.ok) {
      return Promise.reject(res)
    }

    return res.json()
  })
