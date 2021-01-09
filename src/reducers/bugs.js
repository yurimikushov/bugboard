const commonBugs = [
  {
    id: 'bug-0001',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, soluta. Nam in libero unde inventore provident nostrum consectetur cupiditate rerum.',
  },
  {
    id: 'bug-0002',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, soluta. Nam in libero unde inventore provident nostrum consectetur cupiditate rerum.',
  },
  {
    id: 'bug-0003',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, tempore? Omnis similique ipsum qui fugiat magnam distinctio porro nostrum tenetur voluptatem. Harum quos architecto expedita, numquam inventore non in sit distinctio at quo tempore molestias saepe similique atque, ex maxime!',
  },
  {
    id: 'bug-0004',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, tempore? Omnis similique ipsum qui fugiat magnam distinctio porro nostrum tenetur voluptatem. Harum quos architecto expedita, numquam inventore non in sit distinctio at quo tempore molestias saepe similique atque, ex maxime!',
  },
  {
    id: 'bug-0005',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, soluta. Nam in libero unde inventore provident nostrum consectetur cupiditate rerum.',
  },
]

const bugList = [
  { productId: '1', versionId: 'not_fixed', bugs: commonBugs },
  { productId: '1', versionId: '1_0_4', bugs: commonBugs },
  { productId: '1', versionId: '1_0_3', bugs: commonBugs },
  { productId: '2', versionId: '1_0_2', bugs: commonBugs },
  { productId: '2', versionId: '1_0_1', bugs: commonBugs },
]

export default function bugs(state = bugList, action) {
  switch (action.type) {
    case 'LOAD_BUGS':
      // TODO: fetching from server
      return state
    default:
      return state
  }
}
