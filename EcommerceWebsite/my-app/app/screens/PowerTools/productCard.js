import React from 'react';

const ProductCard = ({ imageUrl, productName, reviews, price }) => {
  return (
    <div className="flex flex-col justify-start p-3 border border-gray-300 rounded-md">
      <img src={imageUrl} alt={productName} className="w-full h-[200px] object-cover mb-2" />
      <p className="text-lg font-semibold text-black">{productName}</p>
      <div className="flex flex-col justify-start w-full">
        <p className="text-gray-500">{reviews} reviews</p>
        <p className="text-green-600 font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;