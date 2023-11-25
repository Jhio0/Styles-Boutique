import React from "react";
import Link from "next/link";

import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'

const Box = () => {
  return (
   <div className="container mx-auto mt-3 max-w-screen-xxl  flex items-center border-b-2 ">
    <div className="mr-5">
      <div className="text-[22px] font-bold text-black">
        <Link href="/app">Rent-A-Tool</Link>
      </div>
    </div>
    <div className="grow">
      <div className="md:flex items-center justify-center gap-2 md:gap-8">
        <Link href="/screens/powertools" className="text=-[16px] text-black hover:font-bold">Home</Link>
        <Link href="/item" className="text-black hover:font-bold">About</Link>
        <Link href="contact" className="text-black hover:font-bold">Contact</Link>
      </div>
    </div>
    <div className="ml-auto lg:flex">
      <Link href="register" className="mr-2 text-black hover:font-bold"><AiOutlineHeart className="w-[28px] h-[23px]"></AiOutlineHeart></Link>
      <Link href="login" className=" text-black hover:font-bold"><AiOutlineShoppingCart className="w-[28px] h-[23px]"></AiOutlineShoppingCart></Link>
    </div>
   </div>
  );
};
export {Box};