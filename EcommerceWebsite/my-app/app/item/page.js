'use client'
import React from "react";
import { useState, useEffect } from "react";
import { Box } from "../components/header";
import { FaStar } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { add } from '@/redux/CartSlice';
import Image from "next/image";
function ProductDetailsPage ({selectedProduct})  {
    const searchParams = useSearchParams()
    const id = searchParams.get('id');
    const [product, setProduct] = useState(null);

    const dispatch = useDispatch();

    const [textBoxValue, setTextBoxValue] = useState('');


    const handleAdd = (product) => {
        dispatch(add(product));
    }

    useEffect(() => {
        const fetchProductDetails = async () => {
          try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await res.json();
            setProduct(data);
          } catch (error) {
            console.error('Error fetching product details:', error);
          }
        };
    
        if (id) {
          fetchProductDetails();
        }
      }, [id]);

      if (!product) {
        // Render loading state or handle the absence of the product details
        return <p>Loading...</p>;
      }
    return (
        <div className="bg-white min-h-screen flex flex-col justify-start">
            <Box/>
            <div className="flex w-full h-[71px] bg-[#F9F1E7] "></div>
            <div className="flex justify-center p-10">

                <div className="flex flex-col justify-center p-[30px] ">
                    <Image className="border border-black border-r-4 mb-8 p-[5px] w-[150px] h-[150px] rounded-[20px]" src={product.image} width={150} height={150} alt='/' />
                    <Image className="border border-black border-r-4 mb-8 p-[5px] w-[150px] h-[150px] rounded-[20px]" src={product.image} width={150} height={150} alt='/' />
                    <Image className="border border-black border-r-4 mb-8 p-[5px] w-[150px] h-[150px] rounded-[20px]" src={product.image} width={150} height={150} alt='/' />
                </div>
                <div className="flex items-center mb-9">
                    <Image className="border border-black border-opacity-25 w-[501px] h-[530px] rounded-[20px] "src={product.image} width={501} height={530} alt='/' />
                </div>
                <div className="flex flex-col justify-start pl-[150px] mt-3">
                    <p className="text-black text-[30px] pl-5 pb-2">{product.title}</p>
                    <div className="flex flex-row pl-5 pb-2">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="text-[#FFD700]" />
                        ))}
                    </div>
                    <p className="text-neutral-400 text-2xl pl-5 ">{product.price.toFixed(2)}</p>
                    <p className="w-[424px] h-20 text-black text-[15px] pl-5 pt-2">{product.description}</p>
                    <div className="flex ml-[20px] mt-[100px] w-[400px] ">
                        <button onClick={() => handleAdd(product)} className= "w-full bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800">
                            Add to Bag
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsPage;