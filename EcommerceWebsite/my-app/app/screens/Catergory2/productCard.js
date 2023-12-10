import React, {useEffect } from 'react';
import { useSelector } from 'react-redux';


const ProductCard = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderedList = products.map((products) => {
        const { id, title, image, price, category} = products;
        return( <div className="flex flex-col justify-start p-3 border border-gray-300 rounded-md">
        <img src={image} alt={productName} key={id} className="w-full h-[200px] object-cover mb-2" />
        <p className="text-lg font-semibold text-black">{title}</p>
        <div className="flex flex-col justify-start w-full">
          <p className="text-gray-500">{category} reviews</p>
          <p className="text-green-600 font-semibold">${price}</p>
        </div>
      </div>);
    });
    return (
        renderedList
    )

};
export default ProductCard;

// export default ProductListing;

// const ProductListing = () => {
//   const products = useSelector((state) => state);
//   const dispatch = useDispatch();

//   const fetchProducts = async ()=> {
//     const response = await axios
//     .get("https://fakestoreapi.com/products")
//     .catch((err) => {
//       console.log("Err", err);
//     });
//     dispatch(setProducts(response.data))
//   };


// useEffect(() => {
//   fetchProducts();
// }, []);