import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PageTitle from '../components/PageTitle'

const PageTitleContainer = ({ appTitle }) => {
  return <PageTitle title={appTitle} />
}

PageTitleContainer.propTypes = {
  appTitle: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  appTitle: state.appTitle,
})

export default connect(mapStateToProps)(PageTitleContainer)
