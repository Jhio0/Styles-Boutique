'use client'
import React, { useState } from "react";
import { Box } from "./components/header";
import { categoryList } from "./components/categoryList";
import { AiOutlineSearch } from 'react-icons/ai';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Desktop = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="bg-[#f9f1e7] flex flex-row justify-center w-full">
      <div className="bg-[#f9f1e7] w-[1440px] h-[1024px] relative">
        <div className="absolute w-[1440px] h-[489px] top-[82px] left-0 bg-[url(../assets/image1.jpg)] bg-cover bg-[50%_50%]">
          <div className="absolute w-[924px] h-[191px] top-[138px] left-[268px]">
            <div className="absolute top-0 left-[100px] [font-family:'Poppins-ExtraBold',Helvetica] font-extrabold text-white text-[96px] tracking-[0] leading-[normal]">
              RENT A TOOL
            </div>
            <p className="absolute w-[920px] top-[144px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[38.4px] tracking-[6.38px] leading-[normal]">
              Find The Right Tools for your Project
            </p>
          </div>
          <div className="absolute w-[518px] h-[58px] top-[381px] left-[451px] bg-white rounded-[10px] border border-solid border-[#9f9f9f]">
            <div><AiOutlineSearch className="text-black absolute w-[24px] h-[24px] top-[16px] left-[473px]" /></div>
          </div>
        </div>
        <Box />
        <div className="absolute top-[607px] ">
          <div className="relative flex items-center">
            <MdChevronLeft onClick={slideLeft} size={40} className="text-black opacity-50 cursor-pointer hover:opacity-100" />
            <div id="slider" className="scrollbar-hide w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
              {categoryList.map((item) => (
                

                <img className="w-[301px] h-[38] rounded-[20px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" src={item.img} alt='/' />
                
              ))}
             
            </div>
            
            <MdChevronRight onClick={slideRight} size={40} className="text-black opacity-50 cursor-pointer hover:opacity-100"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;