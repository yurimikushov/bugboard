import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ProductVersion from './ProductVersion'
import Alert from './Alert'

function ProductVersionList(props) {
  const {
    productId,
    fetchProductVersions,
    isFetching,
    error,
    productVersions,
  } = props

  useEffect(() => {
    fetchProductVersions()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='versions'>
      <h2>Versions</h2>
      {isFetching && <Alert title='Loading...' />}
      {!isFetching && !error && (
        <ul className='list-group list-group-flush'>
          {productVersions.map((version) => (
            <ProductVersion
              key={version.id}
              productId={productId}
              versionId={version.id}
              title={version.title}
            />
          ))}
          {productVersions.length === 0 && <Alert title='No info' />}
        </ul>
      )}
      {!isFetching && error && <Alert title={error} />}
    </div>
  )
}

ProductVersionList.propTypes = {
  productId: PropTypes.string.isRequired,
  fetchProductVersions: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  productVersions: PropTypes.array.isRequired,
}

export default ProductVersionList
