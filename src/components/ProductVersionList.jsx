import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ProductVersion from './ProductVersion'
import Alert from './Alert'

function ProductVersionList(props) {
  const { productId, loadProductVersions, productVersions } = props

  useEffect(() => {
    loadProductVersions()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='versions'>
      <h2>Versions</h2>
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
    </div>
  )
}

ProductVersionList.propTypes = {
  productId: PropTypes.string.isRequired,
  productVersions: PropTypes.array.isRequired,
  loadProductVersions: PropTypes.func.isRequired,
}

export default ProductVersionList
