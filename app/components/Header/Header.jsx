import React from 'react'
import LoginButton from './LoginButton'
import AuthContextprovider from '@/lib/contexts/AuthContext'

const Header = () => {
  return (
    <nav className='px-7 py-3 border-b items-center flex justify-between'>
        <img className='h-20 w-30' src="/logo.png" alt="" />
        <ul className='flex gap-6 items-center'>
            <li>Home</li>
            <li>Blogs</li>
            <li>Contact</li>
        </ul>
      <AuthContextprovider>
          <LoginButton/>

      </AuthContextprovider>
        
        
    </nav>
  )
}

export default Header