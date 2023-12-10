"use client"
import React from "react";
import Link from "next/link";

import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from "react-redux";

const Box = () => {
    const item = useSelector((state)=>state.cart)
  return (
   <div className="container mx-auto mt-3 flex items-center border-b-2 ">
    <div className="mr-5">
      <div className="text-[22px] font-bold text-black">
        <Link href="/">StyleScape Boutique</Link>
      </div>
    </div>
    <div className="grow">
      <div className="md:flex items-center justify-center gap-2 md:gap-8">
        <Link href="/" className="text=-[16px] text-black hover:font-bold">Home</Link>
        <Link href="/screens/About" className="text-black hover:font-bold">About</Link>
        <Link href="/screens/Contact" className="text-black hover:font-bold">Contact</Link>
      </div>
    </div>
    <div className="ml-auto lg:flex flex">
      <Link href="/cart" className="flex mr-2 text-black hover:font-bold"><AiOutlineShoppingCart className="w-[28px] h-[23px]"></AiOutlineShoppingCart>:{item.length}</Link>
    </div>
   </div>

  );
};
export {Box};