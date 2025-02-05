import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ 
    name: '', 
    price: '', 
    cutPrice: '',
    description: '', 
    image: null 
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if ((name === 'price' || name === 'cutPrice') && value < 0) {
      return; // Prevent negative values
    }
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewProduct({ ...newProduct, image: URL.createObjectURL(e.target.files[0]) });
  };

  const addProduct = () => {
    if (editIndex !== null) {
      const updatedProducts = products.map((product, index) => 
        index === editIndex ? newProduct : product
      );
      setProducts(updatedProducts);
      setEditIndex(null);
    } else {
      setProducts([...products, newProduct]);
    }
    setNewProduct({ name: '', price: '', cutPrice: '', description: '', image: null });
    setIsModalOpen(false);
  };

  const deleteProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const editProduct = (index) => {
    setNewProduct(products[index]);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const calculateDiscount = (price, cutPrice) => {
    if (cutPrice && price) {
      return Math.round(((cutPrice - price) / cutPrice) * 100);
    }
    return 0;
  };

  return (
    <div className='h-full w-full bg-green-200'>
    <div className='flex flex-col items-center p-4 justify-center'>
      <h1 className='text-4xl font-bold my-10 mb-12 text-center'>Add Product</h1>
        <div className='flex flex-col mb-8'>
          <div className='grid grid-cols-4 mx-8 mb-8 gap-8'>
          <div className=' flex justify-center border-4 p-4 rounded-lg shadow-lg bg-white border-dashed border-gray-200 h-[350px] w-[300px] relative'>
          <div className='flex justify-center items-center cursor-pointer absolute top-20 ' onClick={() => setIsModalOpen(true)}>
            <span className='text-9xl text-gray-200'>+</span>
          </div>
          <p className='text-center text-xl font-semibold absolute bottom-5 flex'>Add Product</p>
        </div>
            {products.map((product, index) => (
              <div key={index} className='border p-4 rounded-lg shadow-lg bg-white w-[300px] h-[350px] flex flex-col items-center'>
                {product.image && <img src={product.image} alt="Product Preview" className='h-48 w-60 my-2 object-cover' />}
                <div className='flex-1 ml-4 text-center'>
                  <h2 className='font-bold'>{product.name}</h2>
                  <p className='text-lg font-bold'>₹{product.price} <span className='line-through text-gray-500'>₹{product.cutPrice}</span> <span className='text-green-500'>{calculateDiscount(product.price, product.cutPrice)}% off</span></p>
                  <p>{product.description}</p>
                </div>
                <div className='flex flex-row justify-between w-full px-4 py-2'>
                  <button onClick={() => editProduct(index)} className='text-blue-500 text-xl font-semibold'>
                    Edit
                  </button>
                  <button onClick={() => deleteProduct(index)} className='text-red-500'>
                    <FaTrash size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
            <h2 className='text-2xl font-bold mb-4'>Add New Product</h2>
            <input 
              type="text" 
              name="name" 
              placeholder="Product Name" 
              value={newProduct.name} 
              onChange={handleChange} 
              className='border p-2 w-full mb-2'
              required
            />
            <input 
              type="number" 
              name="price" 
              placeholder="Product Price" 
              value={newProduct.price} 
              onChange={handleChange} 
              className='border p-2 w-full mb-2'
              required
              min="0"
            />
            <input 
              type="number" 
              name="cutPrice"
              placeholder="Cut Product Price" 
              value={newProduct.cutPrice} 
              onChange={handleChange} 
              className='border p-2 w-full mb-2'
              required
              min="0"
            />
            <input 
              type="number" 
              name="stockNo"
              placeholder="Stock Number" 
              value={newProduct.stockNo} 
              onChange={handleChange} 
              className='border p-2 w-full mb-2'
              required
              min="0"
            />
            <textarea 
              name="description" 
              placeholder="Product Description" 
              value={newProduct.description} 
              onChange={handleChange} 
              className='border p-2 w-full mb-2'
              required
            />
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              className='border p-2 w-full mb-2'
              required
            />
            {newProduct.image && <img src={newProduct.image} alt="Product Preview" className='h-32 w-full object-cover mt-2' />}
            <div className='flex justify-between mt-4'>
              <button onClick={() => setIsModalOpen(false)} className='bg-red-500 text-white p-2'>Cancel</button>
              <button onClick={addProduct} className='bg-blue-500 text-white p-2'>Save Product</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default AddProduct