"use client"
import React, { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://api.escuelajs.co/api/v1/products").then((response) => response.json()).then((json) => {
            const results = json.filter((user) => {
                return (value && user && user.title && user.title.toLowerCase().includes(value))
            });
            console.log(results);
            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className="flex items-center w-[518px] h-[38px] bg-white rounded-[10px] border border-solid border-[#9f9f9f]">
            <AiOutlineSearch className="w-5 h-5 text-black mx-2" />
            <input
                className="text-black flex-grow focus:outline-none"
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}