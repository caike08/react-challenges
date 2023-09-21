import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout: FC = () => {
  return(
    <div className='min-h-screen gap-2 flex flex-col'>
      <nav className='flex-0 box-border'>
        <ul className='inline-flex items-center gap-4 px-4 text-sm'>
          <li>
            <Link to="/form-data">Form Data</Link>
          </li>
          <li>
            <Link to="/max-count">Max Count</Link>
          </li>
          <li>
            <Link to="/progress-bar">Progress Bar</Link>
          </li>
          <li>
            <Link to="/show-hide">Show Hide</Link>
          </li>
          <li>
            <Link to="/stop-watch">Stop Watch</Link>
          </li>
          <li>
            <Link to="/todo-list">Todo List</Link>
          </li>
          <li>
            <Link to="/lazy-loading">Lazy Loading</Link>
          </li>
          <li>
            <Link to="/reached-bottom">Reached Bottom</Link>
          </li>
          <li>
            <Link to="/window-dimensions">Window Dimensions</Link>
          </li>
          <li>
            <Link to="/context">Context API</Link>
          </li>
        </ul>
      </nav>

      <div className='relative px-4 py-4 flex justify-center items-center flex-1'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
