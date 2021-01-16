import React from 'react'
import PropTypes from 'prop-types'
import ProductVersion from './ProductVersion'
import Spinner from './Spinner'
import NoInfoAlert from './NoInfoAlert'
import ErrorAlert from './ErrorAlert'

const ProductVersionList = ({ productId, versions, isFetching, error }) => {
  const needToShowLoader = isFetching
  const needToShowVersions = !isFetching && !error && versions.length > 0
  const needToShowNoInfoAlert = !isFetching && !error && versions.length === 0
  const needToShowErrorAlert = !!error

  return (
    <div className='versions'>
      <h2>Versions</h2>
      {needToShowLoader && <Spinner />}
      {needToShowVersions && (
        <ul className='list-group list-group-flush'>
          {versions.map((version) => (
            <ProductVersion
              key={version.id}
              productId={productId}
              versionId={version.id}
              title={version.title}
            />
          ))}
        </ul>
      )}
      {needToShowNoInfoAlert && <NoInfoAlert />}
      {needToShowErrorAlert && <ErrorAlert errorText={error} />}
    </div>
  )
}

ProductVersionList.propTypes = {
  productId: PropTypes.string.isRequired,
  versions: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

export default ProductVersionList
