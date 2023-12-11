import React from "react";
import Link from "next/link";

export const SearchResult = ({ result }) => {
    return (
      <div
        className="flex items-center w-[518px] h-[38px] text-black bg-opacity-75 p-4   hover:bg-gray-400 cursor-pointer  shadow-md transition duration-300"
       
      >
        <Link href={{pathname: '/item', query: {id: result.id}}}>{result.title}</Link>
      </div>
    );
};