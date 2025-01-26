import React from 'react'
import Header from '../common/Header'
import Routers from '../router/Routers'

const Layout = () => {
  return (
    <div>
        <div>
            <header>
                <Header/>
            </header>
        </div>
        <div className='container text-primary'>
            <main className='flex justify-center mb-10'>
                <Routers/>
            </main>
        </div>
    </div>
  )
}

export default Layout