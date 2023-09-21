import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Render page if wrong URL, redirects to home after 3 seconds
const NotFound: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 3000)  
  }, [navigate])

  return (
    <div className='text-center text-2xl font-bold'>404 - This page does not exist! You will be redirected to the home page</div>
  )
}

export default NotFound
