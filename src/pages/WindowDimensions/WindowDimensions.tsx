import { FC } from 'react'

import useWindowDimensions from '../../hooks/useWindowDimensions'

const WindowDimensions: FC = () => {
  const { width, height } = useWindowDimensions()

  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full'>
      <h1 className='text-2xl font-bold'>Window dimensions</h1>

      <h4 className='text-xl'>width: {width}</h4>
      <h4 className='text-xl'>height: {height}</h4>
      <p className='text-sm'>Resize the window.</p>
    </div>
  )
}

export default WindowDimensions
