const productVersionList = [
  {
    id: '1',
    versions: [
      { id: 'not_fixed', title: 'Not fixed' },
      { id: '1_0_4', title: '1.0.4' },
      { id: '1_0_3', title: '1.0.3' },
      { id: '1_0_2', title: '1.0.2' },
      { id: '1_0_1', title: '1.0.1' },
      { id: '1_0_0', title: '1.0.0' },
      { id: '0_1_0', title: '0.1.0' },
    ],
  },
  {
    id: '2',
    versions: [
      { id: 'not_fixed', title: 'Not fixed' },
      { id: '1_0_3', title: '1.0.3' },
      { id: '1_0_2', title: '1.0.2' },
      { id: '1_0_1', title: '1.0.1' },
      { id: '1_0_0', title: '1.0.0' },
      { id: '0_1_0', title: '0.1.0' },
    ],
  },
  {
    id: '3',
    versions: [
      { id: 'not_fixed', title: 'Not fixed' },
      { id: '1_0_2', title: '1.0.2' },
      { id: '1_0_1', title: '1.0.1' },
      { id: '1_0_0', title: '1.0.0' },
      { id: '0_1_0', title: '0.1.0' },
    ],
  },
]

export default function productVersions(state = [], action) {
  switch (action.type) {
    case 'LOAD_PRODUCT_VERSIONS':
      return productVersionList.filter(
        (product) => product.id === action.payload.id
      )[0].versions
    default:
      return state
  }
}
