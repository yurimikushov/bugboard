const getProductVersionTitle = (versions, id) => {
  const version = versions.find((version) => version.id === id)

  return (version && version.title) || ''
}

export { getProductVersionTitle }
