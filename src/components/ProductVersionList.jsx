import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ProductVersion from './ProductVersion'
import Spinner from './Spinner'
import InfoAlert from './InfoAlert'
import ErrorAlert from './ErrorAlert'

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

  const needToShowLoader = isFetching
  const needToShowProductVersions = !isFetching && !error && productVersions.length > 0
  const needToShowNoInfoAlert = !isFetching && !error && productVersions.length === 0
  const needToShowErrorAlert = !!error

  return (
    <div className='versions'>
      <h2>Versions</h2>
      {needToShowLoader && <Spinner />}
      {needToShowProductVersions && (
        <ul className='list-group list-group-flush'>
          {productVersions.map((version) => (
            <ProductVersion
              key={version.id}
              productId={productId}
              versionId={version.id}
              title={version.title}
            />
          ))}
        </ul>
      )}
      {needToShowNoInfoAlert && <InfoAlert text='No info' />}
      {needToShowErrorAlert && <ErrorAlert errorText={error} />}
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
