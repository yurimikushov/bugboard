import React from 'react'
import PropTypes from 'prop-types'
import withDynamicFetching from './WithDynamicFetching'
import ProductVersion from './ProductVersion'

const ProductVersionList = ({ productId, data }) => (
  <ul className='list-group list-group-flush'>
    {data.map((version) => (
      <ProductVersion
        key={version.id}
        productId={productId}
        versionId={version.id}
        title={version.title}
      />
    ))}
  </ul>
)

ProductVersionList.propTypes = {
  productId: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}

export default withDynamicFetching(ProductVersionList)
