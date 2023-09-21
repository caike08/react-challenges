import { FC, useEffect, useRef, useState } from 'react'

const MaxCount: FC = () => {
  const [ count, setCount ] = useState(0)
  const [ timeLeft, setTimeLeft ] = useState(10)
  const id = useRef<number>()

  const clear = () => {
    clearInterval(id.current)
  }

  useEffect(() => {
    // countdown timer
    id.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1)
    }, 1000)

    // clear countdown when timeLeft reaches 0
    return clear
  }, [])

  useEffect(() => {
    // clear countdown when timeLeft reaches 0
    if (timeLeft === 0) {
      clear()
    }
  }, [ timeLeft ])

  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <h1 className='text-2xl font-bold'>Max Count</h1>
      <p className='text-xl'>
        Implement a countdown timer from 10 to zero that tracks the amount of clicks on a button and
        hides it when it reaches zero
      </p>
    
      <div className='flex flex-col gap-4 items-center justify-center bg-gray-200 w-full px-4 py-4'>
        <h2>{count}</h2>
        <h5>Time Left: {timeLeft} s</h5>

        {timeLeft > 0 && (
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-white'
            onClick={() => {
              setCount(count + 1)
            }}
          >
            Click Me
          </button>
        )}
      </div>
    </div>
  )
}

export default MaxCount
