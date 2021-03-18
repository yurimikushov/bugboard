const versions = [
  { id: 'not_fixed', title: 'Not fixed' },
  { id: '1_0_4', title: '1.0.4' },
  { id: '1_0_3', title: '1.0.3' },
  { id: '1_0_2', title: '1.0.2' },
  { id: '1_0_1', title: '1.0.1' },
  { id: '1_0_0', title: '1.0.0' },
  { id: '0_1_0', title: '0.1.0' },
]

const fetchProductVersions = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(versions)
    }, 500)
  })
}

export { fetchProductVersions }
