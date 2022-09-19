import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const AppLayout = ({ children }) => {
    return (
        <div className='bg-white'>
            <Navbar />
            <div className=' w-screen flex container mx-auto' style={{ height: 'calc(100vh - 56px)' }}>
                <div className="w-[220px]">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <div className="flex">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppLayout