import React from 'react'

const DropButton = ({ onSelect }) => {
  return (
    <select 
      className='bg-black text-white text-xl px-4 py-2 focus:outline-none'
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="blue">Dashboard</option>
      <option value="green">Add products</option>
      <option value="red">Orders details</option>
    </select>
  )
}

export default DropButton
