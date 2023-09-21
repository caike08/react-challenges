import { FC } from 'react'

import usePageBottom from '../../hooks/usePageBottom'

// Array from 0 to 100 to force page scroll
const array = Array.from({ length: 100 }, (_, i) => i)

const ReachedBottom: FC = () => {
  const reachedBottom = usePageBottom()

  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <ul>
        {array.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {reachedBottom && (
        <p className='text-2xl font-bold bg-purple-200 px-4 py-2 rounded'>If you see this, you've reached bottom</p>
      )}
    </div>
  )
  
}

export default ReachedBottom
