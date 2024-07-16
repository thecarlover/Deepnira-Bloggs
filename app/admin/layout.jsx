import AuthContextprovider from '@/lib/contexts/AuthContext'
import React from 'react'
import Sidebar from './components/Sidebar'

const layout = ({children}) => {
  return (
    <>



    <AuthContextprovider>
        <section className='flex'>
            <Sidebar/>
            {children} 

        </section>
                 

    </AuthContextprovider>
        
    </>
  )
}

export default layout