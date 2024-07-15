import React from 'react'

const Header = () => {
  return (
    <nav className='px-7 py-3 border-b items-center flex justify-between'>
        <img className='h-20 w-30' src="/logo.png" alt="" />
        <ul className='flex gap-6 items-center'>
            <li>Home</li>
            <li>Blogs</li>
            <li>Contact</li>
        </ul>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-full'>
            Sign in With Google

        </button>
    </nav>
  )
}

export default Header