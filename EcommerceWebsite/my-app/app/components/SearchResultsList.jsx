import React from "react";
import { SearchResult } from "./SearchResult";
export const SearchResultsList = ({results}) => {
    return(
        <div className=" bg-opacity-75 bg-white flex flex-col items-center shadow-md rounded-lg mt-4 max-h-300 overflow-y-auto">
            {
                results.map((result, id) => {
                    return <SearchResult result={result} key={id} />;
                })
            }
        </div>
    );
};