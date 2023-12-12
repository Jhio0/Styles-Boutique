"use client"
import React from "react";
import SocialLogo from 'social-logos';

const FooterPage = () => {
    return(
    <div className="bg-gray-800 text-white p-4 text-center">
        <p className="text-sm">
        &copy; 2023 StyleScape Boutique. All rights reserved.
        </p>
        <p className="text-sm mt-2">
        Use Client: <strong>StyleScape-Boutique</strong>
        </p>

        <div className="flex justify-center mt-4 space-x-4">
        <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 ease-in-out transform hover:scale-110"
        >
            <SocialLogo icon="facebook" size={48} />
        </a>
        <a
            href="https://www.instagram.com/jhio_soriano/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 ease-in-out transform hover:scale-110"
        >
            <SocialLogo icon="instagram" size={48} />
        </a>
        <a
            href="https://github.com/Jhio0"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 ease-in-out transform hover:scale-110"
        >
            <SocialLogo icon="github" size={48} />
        </a>
        </div>
    </div>
    )
};

export {FooterPage};