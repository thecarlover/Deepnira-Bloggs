"use client"

import React from 'react'
import { useCategoryForm } from './contexts/CategoryFormContext'

const Page = () => {
  const {
        data,
        loading,
        error,
        done,
        handleData,
        handleCreate,
        image,
        setImage,
        handleReset

  }=useCategoryForm();

  

  return (
    <main className='w-full p-6 bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>Categories | Form</h1>
        <form className='space-y-4' onSubmit={(e)=>{
          e.preventDefault();
          handleCreate();
          
        }}>
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
              onChange={(e)=>{
                handleData('categoryName',e.target.value)
              }}
              value={data?.categoryName}
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
              onChange={(e)=>{
                handleData('categorySlug',e.target.value)

              }}
              value={data?.categorySlug}
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
              onChange={(e)=>{
                handleData('description',e.target.value)
              }
              }
              value={data?.description}
            ></textarea>
          </div>
          
          {/* for image see */}
          {image && <div>
            <img src={URL.createObjectURL(image)} alt='image' className='w-full h-40 object-cover'/>
            </div>}



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
              onChange={(e)=>{
                e.preventDefault();
                setImage(e.target.files[0]);
              }}
              required
            />
          </div>
           {error && <p className='text-red-500 text-sm'>{error}</p>}
          <div className='flex items-center justify-between'>
           
            <button
              type='submit'
              disabled={loading||done}
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'
              
            >
              {loading?"Have a Tea!!":"Create"}
              
            </button>
            <button
              onClick={handleReset}
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
