import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import FormData from './pages/FormData/FormData'
import Layout from './components/Layout/Layout'
import MaxCount from './pages/MaxCount/MaxCount'
import TodoList from './pages/TodoList/TodoList'
import StopWatch from './pages/Stopwatch/Stopwatch'
import ProgressBar from './pages/ProgressBar/ProgressBar'
import ShowHide from './pages/ShowHide/ShowHide'
import LazyLoading from './pages/LazyLoading/LazyLoading'
import NotFound from './pages/NotFound/NotFound'
import ReachedBottom from './pages/ReachedBottom/ReachedBottom'
import WindowDimensions from './pages/WindowDimensions/WindowDimensions'
import Context from './pages/Context/Context'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/form-data' element={<FormData />} />
      <Route path='/max-count' element={<MaxCount />} />
      <Route path='/todo-list' element={<TodoList />} />
      <Route path='/progress-bar' element={<ProgressBar />} />
      <Route path='/show-hide' element={<ShowHide />} />
      <Route path='/stop-watch' element={<StopWatch />} />
      <Route path='/lazy-loading' element={<LazyLoading />} />
      <Route path='/reached-bottom' element={<ReachedBottom />} />
      <Route path='/window-dimensions' element={<WindowDimensions />} />
      <Route path='/context' element={<Context />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
