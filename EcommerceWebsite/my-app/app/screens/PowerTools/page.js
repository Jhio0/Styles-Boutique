'use client'
import React, { useState } from "react";
import { Box } from "../../components/header";
import ProductCard from "./productCard";
import { products } from "./products";

const page = () => {
  return (
    <div className="bg-[#ffff] flex flex-col items-center justify-center">
      <Box/>
      <div className="bg-cover m-1 bg-center flex flex-col justify-center items-center w-full h-[82px] bg-[url(../assets/image1.jpg)]">
        <p className="flex items-center font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[38.4px] tracking-[6.38px] leading-[normal]">
          Shop
        </p>
      </div>
      <div className="bg-cover bg-center flex flex-col justify-center items-center w-full h-[71px] bg-[#F9F1E7]"></div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;