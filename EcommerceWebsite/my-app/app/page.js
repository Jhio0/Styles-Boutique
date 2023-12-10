'use client'
import React, { useState } from "react";
import { Box } from "./components/header";
import { categoryList } from "./components/categoryList";
import { AiOutlineSearch } from 'react-icons/ai';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Link from "next/link";

const page = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="bg-[#f5f5f5] flex flex-col items-center justify-center">
      <Box/>
        <div className="bg-cover bg-center m-5 flex flex-col justify-center items-center w-full h-[530px] bg-[url(../assets/mainPage3.jpg)] ">
            <p className="flex items-center font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[38.4px] tracking-[6.38px] leading-[normal]">
            Elevate Your Wardrobe with Unique Styles for Every Vibe
            </p>
            <div className="flex justify-center items-center[font-family:'Poppins-ExtraBold',Helvetica] font-extrabold text-white text-[96px] tracking-[0] leading-[normal]">
            StyleScape Boutique
            </div>
            <div className="flex items-center w-[518px] h-[38px] bg-white rounded-[10px] border border-solid border-[#9f9f9f]">
              <div className="flex justify-center items-center ml-auto mr-3"><AiOutlineSearch className="w-5 h-5 text-black" /></div>
            </div>
        </div>
        <div className="flex mb-5">
          <div className="flex items-center ">
            <MdChevronLeft onClick={slideLeft} size={40} className="text-black opacity-50 cursor-pointer hover:opacity-100" />
            
            <div id="slider" className="scrollbar-hide w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
              {categoryList.map((item) => (
                <Link key={item.id} href={`/screens/${item.name}`}>

                  <img className="w-[301px] h-[330px] rounded-[20px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={item.img} alt='/' />
                  
              
                </Link>
              ))}
            </div>
            
            <MdChevronRight onClick={slideRight} size={40} className="text-black opacity-50 cursor-pointer hover:opacity-100"/>
          </div>
        </div>
    </div>
  );
};

export default page;  