import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import ProductVersion from './ProductVersion'
import Alert from './Alert'

function ProductVersionList({ products }) {
  const { productId } = useParams()

  const productVersions = products.filter(
    (product) => product.id === productId
  )[0].versions

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
  products: PropTypes.array,
}

export default ProductVersionList
