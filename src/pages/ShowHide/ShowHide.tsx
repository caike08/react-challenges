import { FC, useState } from 'react'

const ShowHide: FC = () => {
  const [show, setShow] = useState<boolean>(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className='min-h-screen gap-2 flex flex-col w-full'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-white'
        onClick={handleClick}
      >
        Show/Hide
      </button>

      {show && <span className='font-bold'>Content is shown</span>}
    </div>
  )
}

export default ShowHide
