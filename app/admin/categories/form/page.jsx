import React from 'react'

const Page = () => {
  return (
    <main className='w-full p-6 bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>Categories | Form</h1>
        <form className='space-y-4'>
          <div>
            <label htmlFor='categoryName' className='block text-sm font-medium text-gray-700'>
              Category Name
            </label>
            <input
              type='text'
              id='categoryName'
              name='categoryName'
              required
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm'
            />
          </div>
          <div>
            <label htmlFor='categorySlug' className='block text-sm font-medium text-gray-700'>
              Category Slug
            </label>
            <input
              type='text'
              id='categorySlug'
              name='categorySlug'
              required
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm'
            />
          </div>
          <div>
            <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
              Description
            </label>
            <textarea
              id='description'
              name='description'
              rows='4'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm'
            ></textarea>
          </div>
          <div>
            <label htmlFor='image' className='block text-sm font-medium text-gray-700'>
              Upload Image
            </label>
            <input
              type='file'
              id='image'
              name='image'
              accept='image/*'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'
            >
              Submit
            </button>
            <button
              type='reset'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Page
