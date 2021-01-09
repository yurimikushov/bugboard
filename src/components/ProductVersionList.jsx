import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadProductVersions } from '../redux/actions'
import ProductVersion from './ProductVersion'
import Alert from './Alert'

function ProductVersionList({ productVersions, loadProductVersions }) {
  const { productId } = useParams()

  // eslint-disable-next-line
  useEffect(() => loadProductVersions(productId), [])

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
        {productVersions.length === 0 && <Alert title='No info'/>}
      </ul>
    </div>
  )
}

ProductVersionList.propTypes = {
  productVersions: PropTypes.array,
  loadProductVersions: PropTypes.func,
}

const mapStateToProps = (state) => ({
  productVersions: state.productVersions,
})

const mapDispatchToProps = (dispatch) => ({
  loadProductVersions: (id) => dispatch(loadProductVersions(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductVersionList)
