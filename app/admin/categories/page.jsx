import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='p-6 w-full'>
        <div className='flex items-center justify-between'>
        <h1 className='font-bold'>Categories</h1>

        <Link href={'/admin/categories/form'}>
        <button className=' bg-black px-4 py-2 text-white rounded-full font-bold'>
            Add Category
        </button>
        </Link>
        

        </div>
        
    </main>
  )
}

export default page