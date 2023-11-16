import React from "react";
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'

const Box = () => {
  return (
    <div className="flex-center ">
        <div className="absolute w-[438px] h-[24px] top-[35px] left-[472px]">
            <div className="left-0 absolute top-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[normal]">
            Home
            </div>
            <div className="left-[123px] absolute top-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[normal]">
            Shop
            </div>
            <div className="left-[240px] absolute top-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[normal]">
            About
            </div>
            <div className="absolute top-0 left-[364px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[normal]">
            Contact
            </div>
        </div>
        <div className="relative top-[20px]">
            <div><AiOutlineHeart className="text-black absolute w-[28px] h-[23px] top-[9px] left-[1350px]" /></div>
            <div><AiOutlineShoppingCart className="text-black absolute w-[28px] h-[23px] top-[9px] left-[1390px]" /></div>
            <div className="inline-flex items-center justify-center gap-[5px] absolute top-0 left-0">
            <img className="relative w-[50px] h-[32px]" alt="Meubel house logos" src="/favicon.ico" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[34px] tracking-[0] leading-[normal]">
                Rent-Tool
            </div>
            </div>
        </div>
    </div>
    
  );
};
export {Box};