import React from 'react'
import LoginButton from './LoginButton'
import AuthContextprovider from '@/lib/contexts/AuthContext'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='px-7 py-3 border-b items-center flex justify-between'>
      <Link href={"/"}>
      <img className='h-20 w-30' src="/logo.png" alt="" />
      </Link>
        
        <ul className='flex gap-6 items-center'>
            <li  className='flex items-center gap-2'>Home</li>
            <li className='flex items-center gap-2'>Blogs</li>
            <li className='flex items-center gap-2'>Contact</li>
        </ul>
      <AuthContextprovider>
          <LoginButton/>

      </AuthContextprovider>
        
        
    </nav>
  )
}

export default Header