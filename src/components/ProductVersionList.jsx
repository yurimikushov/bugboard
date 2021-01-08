import React from 'react'
import ProductVersion from './ProductVersion'

const versions = [
  { title: 'Not fixed' },
  { title: '1.0.3' },
  { title: '1.0.2' },
  { title: '1.0.1' },
  { title: '1.0.0' },
  { title: '0.1.0' },
]

function ProductVersionList() {
  return (
    <div className='versions'>
      <h2>Versions</h2>
      <ul className='list-group list-group-flush'>
        {versions.map((version) => (
          <ProductVersion key={version.title} title={version.title} />
        ))}
      </ul>
    </div>
  )
}

export default ProductVersionList
