"use client"
import React from "react";
import Link from "next/link";

import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from "react-redux";

const Box = () => {
    const item = useSelector((state)=>state.cart)
  return (
    <div className="bg-[#f8f9fa] text-black py-2 border-b border-gray-300">
    <div className="container mx-auto flex items-center justify-between">
      <div className="mr-5">
        <div className="text-2xl font-bold">
          <Link className="text-black hover:text-gray-300 mx-5" href="/">
            StyleScape Boutique
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center gap-4">
        <Link href="/" className="text-lg hover:text-gray-300">Home</Link>
        <Link href="/screens/About" className="text-lg hover:text-gray-300">About</Link>
        <Link href="/screens/Contact" className="text-lg hover:text-gray-300">Contact</Link>
      </div>
      <div className="ml-auto flex items-center">
        <Link href="/cart" className="flex items-center text-lg hover:text-gray-300 mx-5">
          <AiOutlineShoppingCart className="w-6 h-6 mr-2" />
          {item.length > 0 && <span className="bg-red-500 text-xs px-2 py-1 rounded-full">{item.length}</span>}
        </Link>
      </div>
    </div>
  </div>

  );
};
export {Box};