import React from 'react'
import PropTypes from 'prop-types'
import withDynamicFetching from './WithDynamicFetching'
import ProductVersion from './ProductVersion'

const ProductVersionList = ({ data }) => (
  <ul className='list-group list-group-flush'>
    {data.map((version) => (
      <ProductVersion
        key={version.id}
        title={version.title}
        href={version.href}
      />
    ))}
  </ul>
)

ProductVersionList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default withDynamicFetching(ProductVersionList)
