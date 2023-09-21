import { FC, useState } from 'react'

type FormDataType = {
  name: string
  email: string
}

const initialState: FormDataType = {
  name: '',
  email: '',
}

const REGEX_NAME = '[a-zA-Z]{3,}'

const REGEX_EMAIL = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'

const FormData: FC = () => {
  const [ form, setForm ] = useState<FormDataType>(initialState)
  const [ showData, setShowData ] = useState<boolean>(false)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowData(true)
  }

  const handleInputDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className='flex flex-col gap-6 items-center justify-center w-full'>
      <h1 className='text-2xl font-bold'>Form example</h1>

      <form onSubmit={handleFormSubmit} className='flex flex-col gap-4 items-center justify-center w-full'>
        <label htmlFor='name' className='flex flex-col gap-2 items-center justify-center'>
          Name:
          <input
            className='px-4 py-2 rounded-md border-2 border-black'
            type='text'
            name='name'
            pattern={REGEX_NAME}
            value={form.name}
            onChange={handleInputDataChange}
          />
        </label>
        <label htmlFor='email' className='flex flex-col gap-2 items-center justify-center'>
          Email:
          <input
            className='px-4 py-2 rounded-md border-2 border-black'
            type='text'
            name='email'
            pattern={REGEX_EMAIL}
            value={form.email}
            onChange={handleInputDataChange}
          />
        </label>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-white disabled:bg-gray-400'
          disabled={!form.name || !form.email}
        >
          Submit
        </button>
      </form>

      {showData && (
        <div className='flex flex-col gap-2 items-center justify-center w-full'>
          <p>Name: {form.name}</p>
          <p>Email: {form.email}</p>
        </div>
      )}
    </div>
  )
}

export default FormData
