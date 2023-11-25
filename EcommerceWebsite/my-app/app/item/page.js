import React from "react";
import { Box } from "../components/header";
import { FaStar } from 'react-icons/fa';

const page = () => {
    return (
        <div className="bg-[#ffff] flex flex-col justify-center">
            <Box/>
            <div className="flex w-full h-[71px] bg-[#F9F1E7]"></div>
            <div className="flex justify-center p-10">
                <div className="flex flex-col justify-center pr-[50px]">
                    <img className="p-[5px] w-[100px] h-[100px] rounded-[20px]" src={"https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80"} alt='/' />
                    <img className="p-[5px] w-[100px] h-[100px] rounded-[20px]" src={"https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80"} alt='/' />
                    <img className="p-[5px] w-[100px] h-[100px] rounded-[20px]" src={"https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80"} alt='/' />
                </div>
                <img className="w-[301px] h-[330px] rounded-[20px]" src={"https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80"} alt='/' />
                <div className="flex flex-col">
                    <p className="text-black text-[42px] pl-5 pb-2">Asgard sofa</p>
                    <div className="flex flex-row pl-5 pb-2">
                        <FaStar className="text-[#FFD700]"/>
                        <FaStar className="text-[#FFD700]"/>
                        <FaStar className="text-[#FFD700]"/>
                        <FaStar className="text-[#FFD700]"/>
                        <FaStar className="text-[#FFD700]"/>
                    </div>
                    <p className="text-neutral-400 text-2xl pl-5 ">$99</p>
                    <p className="w-[424px] h-20 text-black text-[13px] pl-5 pt-2">description Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                </div>
            </div>
        </div>
    )
}

export default page;