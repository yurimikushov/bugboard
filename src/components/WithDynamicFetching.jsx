import React from 'react'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import NoInfoAlert from './NoInfoAlert'
import ErrorAlert from './ErrorAlert'

const withDynamicFetching = (WrappedComponent) => {
  const WithDynamicFetching = (props) => {
    const { data, isFetching, error } = props

    const needToShowLoader = isFetching
    const needToShowData = !isFetching && !error && data.length > 0
    const needToShowNoInfoAlert = !isFetching && !error && data.length === 0
    const needToShowErrorAlert = !!error

    // FIXME: don't should send all props to WrappedComponent

    return (
      <>
        {needToShowLoader && <Spinner />}
        {needToShowData && <WrappedComponent {...props} />} 
        {needToShowNoInfoAlert && <NoInfoAlert />}
        {needToShowErrorAlert && <ErrorAlert errorText={error} />}
      </>
    )
  }

  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  WithDynamicFetching.displayName = `WithDynamicFetching(${wrappedComponentName})`

  WithDynamicFetching.propTypes = {
    data: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  }

  return WithDynamicFetching
}

export default withDynamicFetching
