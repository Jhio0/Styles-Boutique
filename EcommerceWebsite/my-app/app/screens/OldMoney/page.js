'use client'
import React, { useState, useEffect } from "react";
import { Box } from "../../components/header";
import { useDispatch } from 'react-redux';
import { add } from '@/redux/CartSlice';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Image from "next/image";

import Link from "next/link";
import { FooterPage } from "@/app/components/footer";
const Page = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  }

  const handleAdd = (product) => {
    dispatch(add(product));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <Box />
      <div className="bg-cover m-1 bg-center flex flex-col justify-center items-center h-[82px] bg-[url(https://media.timeout.com/images/105419751/image.jpg)]">
        <p className="flex items-center font-family:'Poppins-Medium',Helvetica font-medium text-white text-[38.4px] tracking-[6.38px] leading-[normal]">
          Shop
        </p>
      </div>
      <div className="bg-cover bg-center flex flex-col justify-center items-center h-[71px] bg-[#F9F1E7]"></div>
      <div className="grid grid-cols-  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {products.map((product) => (
          <div
            
            key={product.id}
            className="flex flex-col justify-between items-center p-4 border border-gray-300 rounded-md transition transform hover:shadow-lg"
          ><Link href={{pathname: '/item', query: {id: product.id}}}>
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="h-[200px] w-full object-cover mb-4 rounded-md"
            />
          </Link>
            <div className="flex flex-col items-start">
              <p className="text-lg font-semibold text-black">{product.title}</p>
              <p className="text-green-600 font-semibold mt-2">${product.price.toFixed(2)}</p>
            </div>
            <button
              className="group mt-4 focus:outline-none"
              onClick={() => handleAdd(product)}
            >
              <span className="text-gray-500 group-hover:text-red-600 transition duration-300 transform">
                <AiOutlineShoppingCart className="w-8 h-8" />
              </span>
            </button>
          
          </div>
        ))}
      </div>
      <FooterPage/>
    </div>
  );
};

export default Page;