import { FC, useState } from 'react'
import { cn } from '../../utils/tw-merge'

type ListItem = {
  id: number
  text: string
  completed: boolean
}

const TodoList: FC = () => {
  const [ list, setList ] = useState<ListItem[]>([])
  const [ item, setItem ] = useState('')

  const addItem = (text: string) => {
    setList([...list, { id: Date.now(), text, completed: false }])
    setItem('')
  }

  const removeItem = (id: number) => {
    setList(list.filter((item: ListItem) => item.id !== id))
  }

  const checkItem = (id: number) => {
    setList(list.map((item: ListItem) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  return (
    <div className='flex flex-col items-center gap-4 px-4 py-4 w-full h-screen'>
      <div className='flex flex-col items-center gap-4 w-full'>
        <h1 className='text-2xl font-bold text-center'>Todo List</h1>

        <div className='flex flex-col items-center gap-2 w-full'>
          <input
            className='px-4 py-2 rounded-md border-2 border-black'
            type='text'
            onChange={(e) => setItem(e.target.value)}
            value={item}
          />
          <button
            className='px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 disabled:cursor-not-allowed focus:outline-none disabled:opacity-75'
            onClick={() => addItem(item)}
            disabled={!item}
          >
            Add item
          </button>
        </div>
      </div>

      {list && list.length ? (
        <ul className='flex flex-col items-start px-4 py-4 gap-4 w-full flex-1'>
          {list.map((item: ListItem) => (
            <li key={item.id} className='flex items-center gap-1 w-full'
            >
              <input
                className='w-4 h-4 rounded-md border-2 border-black flex-0 cursor-pointer'
                type='checkbox'
                checked={item.completed}
                onChange={() => checkItem(item.id)}
              />
              <span
                className={cn('flex-1 ellipsis', {
                  'line-through opacity-50': item.completed
                })}
              >
                {item.text}
              </span>
              <button
                className='w-6 h-6 rounded-md bg-red-500 hover:bg-red-600 text-white focus:outline-none text-sm flex-0'
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items</p>
      )}
    </div>
  )
}

export default TodoList
