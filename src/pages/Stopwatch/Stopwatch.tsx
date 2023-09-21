import { FC, useEffect, useState } from 'react'

import { cn } from '../../utils/tw-merge'

const StopWatch: FC = () => {
  const [timer, setTimer] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)

  useEffect(() => {
    let intervalID: number

    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalID = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 10)
    }

    return () => clearInterval(intervalID)
  
  }, [isRunning, timer])

  // Hours calculation
  const hours = Math.floor(timer / 360000)

  // Minutes calculation
  const minutes = Math.floor((timer % 360000) / 6000)

  // Seconds calculation
  const seconds = Math.floor((timer % 6000) / 100)

  // Milliseconds calculation
  const milliseconds = timer % 100

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning)
  }

  // Method to reset timer back to 0
  const reset = () => {
    setTimer(0)
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <p className='text-3xl font-bold'>
        {/*
          Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
          The padding is applied from the start (left) of the current string.
        */}
        {hours}:{minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}:
        {milliseconds.toString().padStart(2, '0')}
      </p>

      <div className='flex gap-4'>
        <button
          className={cn('text-white font-bold py-2 px-4 rounded', {
            'bg-blue-500 hover:bg-blue-700': !isRunning,
            'bg-red-400 hover:bg-red-600': isRunning
          })}
          onClick={startAndStop}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default StopWatch
