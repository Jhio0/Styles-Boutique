"use client"

import React from 'react'
import { remove, updateQuantity } from '@/redux/CartSlice';
import { useDispatch,useSelector } from 'react-redux';
import { Box } from '../components/header';

const Cartpage = () => {
    const dispatch=useDispatch();
    const cartitems = useSelector((state)=>state.cart)


    const handleremove =(id)=>{
        dispatch(remove(id))
    }


    const handleQuantityChange = (id, newQuantity) => {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
    };
    
    const calculateTotal = () => {
      const total = cartitems.reduce((total, item) => total + item.price * item.quantity, 0);
      return total.toFixed(2);
    };
    
      return (
        <div className='font-sans antialiased p-5 bg-gray-100 min-h-screen'>
          <Box />
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-2xl text-black font-semibold mb-5'>Shopping Cart</h1>
            {cartitems.map((item) => (
              <div
                key={item.id}
                className='flex items-center justify-between bg-white p-4 mb-4 rounded-lg shadow-md'
              >
                <div className='flex items-center space-x-4'>
                  <img
                    src={item.images}
                    alt='Product'
                    className='h-[200px] w-[200px] object-cover rounded'
                  />
                  <div>
                    <h2 className='text-lg text-black font-semibold'>{item.title}</h2>
                    <p className='text-gray-500'>{item.description}</p>
                    <p className='text-green-500 mt-2'>
                      Price: ${item.price * item.quantity}
                    </p>
                    <button
                    className='text-red-500 font-semibold mr-4'
                    onClick={() => handleremove(item.id)}
                  >
                    Remove
                  </button>
                    <div className='flex mt-2'>
                      <label className='mr-2 text-black'>Quantity:</label>
                      <input
                        type='number'
                        min='1'
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                        className='border p-1 text-center text-black w-16'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {cartitems.length > 0 && (
              <div className='mt-5'>
                <h3 className='text-xl text-black font-semibold mb-2'>Total: ${calculateTotal()}</h3>
                <button className='bg-yellow-500 text-white px-6 py-2 rounded-md font-semibold'>
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      );
    };
    
    export default Cartpage;