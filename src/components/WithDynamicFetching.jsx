import React from 'react'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import NoInfoAlert from './NoInfoAlert'
import ErrorAlert from './ErrorAlert'

const withDynamicFetching = (WrappedComponent) => {
  const WithDynamicFetching = (props) => {
    const { dataListName, isFetching, error, ...wrappedComponentProps } = props

    const data = props[dataListName]

    const needToShowLoader = isFetching
    const needToShowData = !isFetching && !error && data.length > 0
    const needToShowNoInfoAlert = !isFetching && !error && data.length === 0
    const needToShowErrorAlert = !!error

    return (
      <>
        {needToShowLoader && <Spinner />}
        {needToShowData && <WrappedComponent {...wrappedComponentProps} />}
        {needToShowNoInfoAlert && <NoInfoAlert />}
        {needToShowErrorAlert && <ErrorAlert errorText={error} />}
      </>
    )
  }

  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  WithDynamicFetching.displayName = `WithDynamicFetching(${wrappedComponentName})`

  WithDynamicFetching.propTypes = {
    dataListName: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  }

  return WithDynamicFetching
}

export default withDynamicFetching
