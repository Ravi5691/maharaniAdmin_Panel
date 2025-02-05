// Import necessary libraries
import React, { useState } from 'react';

const orders = [
  { id: 1, product: 'Smart watch', address: '351 Sherwood Forest Drive', date: '20/03/2021', price: 376.00, status: 'Complete' },
  { id: 2, product: 'Headphones', address: '6391 Elgin St. Celina', date: '21/03/2021', price: 276.00, status: 'Pending' },
  { id: 3, product: 'Iphone Pro', address: '8502 Preston Rd. Inglewood', date: '01/04/2021', price: 300.00, status: 'Canceled' },
  { id: 4, product: 'Apple AirPods Pro', address: '4517 Washington Ave. Manchester', date: '01/04/2021', price: 200.00, status: 'Complete' },
  { id: 5, product: 'Nike Air Max', address: '3891 Ranchview Dr. Richardson', date: '02/04/2021', price: 100.00, status: 'Complete' },
  { id: 6, product: 'Girls Bag', address: '2972 Westheimer Rd. Santa Ana', date: '02/04/2021', price: 76.00, status: 'Pending' },
  { id: 7, product: 'Canon 600d', address: '3517 W. Gray St. Utica', date: '03/04/2021', price: 500.00, status: 'Pending' },
  { id: 8, product: 'Apple Watch', address: '4140 Parker Rd. Allentown', date: '07/04/2021', price: 300.00, status: 'Complete' },
  { id: 9, product: 'Alexa Box', address: '2464 Royal Ln. Mesa', date: '09/04/2021', price: 76.00, status: 'Complete' },
  { id: 10, product: 'Apple Macbook Air 13"', address: '3517 W. Gray St. Utica', date: '10/04/2021', price: 600.00, status: 'Canceled' },
];

const statusColors = {
  Complete: 'text-green-600 bg-green-100',
  Pending: 'text-yellow-600 bg-yellow-100',
  Canceled: 'text-red-600 bg-red-100',
};

export default function OrderPage() {
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredOrders = selectedStatus === 'All' ? orders : orders.filter(order => order.status === selectedStatus);
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const displayedOrders = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1); // Reset to the first page when the filter changes
  };

  return (
    <div className="p-6 bg-green-200 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Order <span className="text-gray-500">({filteredOrders.length} Orders Found)</span></h1>

      <div className="flex gap-4 mb-4">
        {['All', 'Complete', 'Pending', 'Canceled'].map((status) => (
          <button
            key={status}
            onClick={() => handleStatusChange(status)}
            className={`px-4 py-2 rounded-full ${selectedStatus === status ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="table-auto w-full">
          <thead>
            <tr className="text-left text-sm text-gray-600">
              <th className="px-4 py-8">#</th>
              <th className="px-4 py-5">Order ID</th>
              <th className="px-4 py-5">Product Name</th>
              <th className="px-4 py-5">Address</th>
              <th className="px-4 py-5">Date</th>
              <th className="px-4 py-5">Price</th>
              <th className="px-4 py-5">Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedOrders.map((order, index) => (
              <tr key={order.id} className="text-sm text-gray-700">
                <td className="px-4 py-5">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                <td className="px-4 py-5">#{order.id}</td>
                <td className="px-4 py-5">{order.product}</td>
                <td className="px-4 py-5">{order.address}</td>
                <td className="px-4 py-5">{order.date}</td>
                <td className="px-4 py-5">${order.price.toFixed(2)}</td>
                <td className={`px-4 py-5 ${statusColors[order.status]} rounded-full text-center`}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">
          Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredOrders.length)} to {Math.min(currentPage * itemsPerPage, filteredOrders.length)} of {filteredOrders.length} entries
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            Previous
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => setCurrentPage(page + 1)}
              className={`px-3 py-1 rounded ${currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}