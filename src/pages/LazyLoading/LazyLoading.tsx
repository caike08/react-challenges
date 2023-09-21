import {
  FC,
  lazy,
  useState,
  Suspense,
  ComponentType,
} from 'react'

import Loading from '../../components/Loading/Loading'

const Component = lazy(() => delayForDemo(import('../../components/SimpleComponent/SimpleComponent')))

const LazyLoading: FC = () => {
  const [showPreview, setShowPreview] = useState(false)

  return(
    <div className='flex flex-col gap-4 items-center justify-center'>
      <label className='inline-flex flex-row gap-2 items-center'>
        <input type='checkbox' checked={showPreview} onChange={() => setShowPreview(!showPreview)} />
        Check this to load the component
      </label>

      {showPreview && (
        <Suspense fallback={<Loading />}>
          <Component />
        </Suspense>
      )}

    </div>
  )
}

// delay component loading to force loading state
function delayForDemo(promise: Promise<{ default: ComponentType }>) {
  return new Promise(resolve => {
    setTimeout(resolve, 3000);
  }).then(() => promise);
}

export default LazyLoading
