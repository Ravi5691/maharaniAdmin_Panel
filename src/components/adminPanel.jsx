import React, { useState } from 'react'
import DropButton from './dropbutton'
import Dashboard from './dashboard'
import AddProduct from './addProduct'
import OrderDetail from './OrderDetail'

const AdminPanel = () => {
  const [selectedPage, setSelectedPage] = useState('blue')

  // Function to handle page selection
  const handlePageSelect = (page) => {
    setSelectedPage(page)
  }

  // Render selected page content
  const renderPage = () => {
    switch (selectedPage) {
      case 'blue':
        return <Dashboard />
      case 'green':
        return <AddProduct />
      case 'red':
        return <OrderDetail />
      default:
        return <BluePage />
    }
  }

  return (
    <div>
      <div className='h-screen w-screen flex flex-col overflow-x-hidden'>
        <div className='flex flex-row h-[8%] px-20 py-8 bg-black text-white justify-between items-center top-0'>
          <div className='text-2xl font-bold'>
            Admin Panel
          </div>
          <div className='flex flex-row gap-10'>
            <div>
              <DropButton onSelect={handlePageSelect} />
            </div>
            <button className='text-xl'>
              Logout
            </button>
          </div>
        </div>
        {renderPage()}
      </div>
    </div>
  )
}

export default AdminPanel