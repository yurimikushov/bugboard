import React from 'react'
import Bug from './Bug'

const bugs = [
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

function BugList() {
  return (
    <div className='versions'>
      <h2>Fixed bugs</h2>
      <ul className='list-group list-group-flush'>
        <hr />
        {bugs.map((bug) => (
          <Bug key={bug.id} id={bug.id} description={bug.description} />
        ))}
      </ul>
    </div>
  )
}

export default BugList
