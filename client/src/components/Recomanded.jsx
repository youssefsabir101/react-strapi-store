import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";

import StoreContext from "../hooks/storeContext";
import { addToCart } from "./redux/cartReducer";
import {useDispatch} from "react-redux"

function Recomanded() {


  const {filter} = useContext(StoreContext)
  //get products from api
  const [products,setProducts] =useState([]);
  const {data, loading, errors} = useFetch(filter);
  useEffect(()=>{
     data && setProducts(data)
  },[data])

  //gret fronm category

  
  /* useEffect(()=>{
      console.log(filter)
    },[filter]) */

  // difine dispatch
  const dispatch = useDispatch();
    
      
  return (
    
    <div className="lg:container mx-auto pb-16  w-full ">
        <span className='bg-violet-700 w-2 h-9 inline-block -mb-2'></span>
        <h2 className="inline-block text-2xl font-medium text-gray-800 uppercase pl-4 mb-6">recomended for you</h2>
        <div className="max-sm:grid-cols-2 grid sm:mx-2 sm:grid-cols-2 md:mx-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 md:gap-0 ">
                    {products.slice(0, 8).map((product,id) => (
                        <div key={id} className="shadow-xl max-sm:mx-1 sm:mx-2 md:mx-1 lg:mx-2 xl:mx-4 rounded-md bg-white my-2 cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
                            <Link to={`/products/${product.id}`}>
                                {(product.attributes.isFeatured) ? <span className="relative bg-violet-700 w-16 rounded-lg rounded-tl-none rounded-br-none px-4 -mb-6 ml-auto font-semibold flex text-white">New</span> : <></> }
                                
                                <img className="max-sm:h-40 h-64 w-full rounded-md object-cover" src={import.meta.env.VITE_API_URL + product.attributes.image.data.attributes.url} alt="product image" />
                            </Link>
                            <div className='flex m-2 mb-0'>
                                <p className="max-sm:px-2 bg-violet-700 w-fit rounded-full px-4 m-2 font-bold flex text-white">${product.attributes.price}</p>
                                {product.attributes.oldPrice ? <p className="max-sm:pr-1 w-fit rounded-full pr-4 my-2 font-medium  flex text-red-700 line-through">${product.attributes.oldPrice}</p> : <p>{' '}</p>}
                                
                                
                                
                                
                                <div className='flex items-center ml-auto '>
                                    <Link to={`/Wishlist`}>
                                        <span className='max-sm:grid-cols-2 bg-gray-100 shadow-xl w-10 h-10 rounded-full items-center justify-center inline-flex cursor-pointer hover:border-violet-700 hover:border transition-all ease-in-out duration-500'>
                                            <svg
                                                fill="white"
                                                stroke="black"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex mx-4 my-0">
                                <span className="flex items-center">
                                    {[...Array(4)].map((_, index) => (
                                    <svg
                                        key={index}
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-3 h-3 text-violet-700"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    ))}
                                    <span className="text-gray-400 ml-1 font-extralight">|142 Reviews</span>
                                </span>
                            </div>
                            <Link to={`/products/${product.id}`}>
                                <h2 className='max-sm:font-medium font-semibold px-4'>{product.attributes.Title}</h2>
                                <p className='max-sm:font-light text-gray-500 px-4 line-clamp-2'>{product.attributes.Desc}</p>
                            </Link>
                            
                            <div className='mx-4'>
                                <button onClick={()=>dispatch(addToCart({
                                    id: product.id,
                                    title: product.attributes.Title,
                                    desc: product.attributes.Desc,
                                    price: product.attributes.price,
                                    image: product.attributes.image.data.attributes.url,

                                }))} 
                                className='shadow-md bg-violet-700 rounded-md py-2 mb-4 w-full text-white hover:scale-105 transition-all ease-in-out duration-100'>Add to Cart</button>
                            </div>
                            
                        </div>
                    ))}
        </div>
        <div className="flex items-center justify-center mt-6 py-6">
            <Link to="/products" className="block w-full rounded bg-violet-700 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-violet-500 sm:w-auto hover:scale-105 transition-all ease-in-out duration-100">
                Show More...
            </Link>
        </div>
    </div>
  )
}

export default Recomanded