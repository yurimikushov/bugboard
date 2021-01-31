const getProductVersionTitle = (versions, id) => {
  const version = versions.find((versions) => (versions.id = id))

  return (version && version.title) || ''
}

export { getProductVersionTitle }
