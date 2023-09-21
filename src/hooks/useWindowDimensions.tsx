import { useEffect, useState } from 'react'

function useWindowDimensions() {
  const [ width, setWidth ] = useState(window.innerWidth)
  const [ height, setHeight ] = useState(window.innerHeight)

  const dimensionsTracker = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  window.addEventListener('resize', dimensionsTracker)

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', dimensionsTracker)
    }
  }, [])


  return {
    width,
    height,
  }
}

export default useWindowDimensions
