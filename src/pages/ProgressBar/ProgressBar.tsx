import { FC, useState } from 'react'

const ProgressBar: FC = () => {
  const [ value, setValue ] = useState(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setValue(Number(e.target.value))
  }

  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full'>
      <h1 className='text-2xl font-bold'>Progress Bar</h1>

      <div className='rounded w-full h-4 bg-gray-200 overflow-hidden'>
        <span
          className='flex rounded bg-gray-500 w-full h-4 transition-all'
          style={{ width: `${value}%` }}
          aria-hidden='true'
        />
      </div>

      <div className='inline-flex flex-col gap-2 items-center justify-center'>
        <span className='font-bold'>Input percentage: </span>
        <input
          className='px-4 py-2 rounded-md border-2 border-black'
          type='number'
          min={0}
          max={100}
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export default ProgressBar
