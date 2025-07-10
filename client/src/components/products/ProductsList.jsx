import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";


import StoreContext from "../../hooks/storeContext";
import SkeletonLoader from "./SkeletonLoader";
import { addToCart } from "../redux/cartReducer";
import {useDispatch} from "react-redux"
import ReactPaginate from "react-paginate"
import {BsChevronRight, BsChevronLeft} from "react-icons/bs"

function ProductsList({category,inputSearchValue}) {
    const {filter} = useContext(StoreContext)
    //get products from api
    const [products,setProducts] =useState([]);
    const {data, loading, errors} = useFetch(filter);
    useEffect(()=>{
       data && setProducts(data)
    },[data])
    
    // search =========================================================================
   let productTump = products;
    if(inputSearchValue.length == 0){
        productTump = products
    }else if(inputSearchValue.length >= 1){
        productTump = products.filter( product =>{
            return product.attributes.Title.toLowerCase().includes(inputSearchValue) || product.attributes.Desc.toLowerCase().includes(inputSearchValue);
            })
    }
    

    // difine dispatch
    const dispatch = useDispatch();
  return (
        <>
            {/* Products card section */}
            <div className="max-sm:grid-cols-2 mt-10 grid  sm:mx-2  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 lg:mx-0 xl:grid-cols-3 md:gap-0 ">

                {   loading ? <>
                                <SkeletonLoader />
                                <SkeletonLoader />
                                <SkeletonLoader />
                                <SkeletonLoader />
                            </>
                    :
                    productTump.map((product,id) => (
                        <div key={id} className="shadow-xl max-sm:mx-1 sm:mx-2 md:mx-1 lg:mx-2 xl:mx-4 rounded-md bg-white my-2 cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
                            <Link to={`/products/${product.id}`}>
                                {(product.attributes.isFeatured) ? <span className="relative bg-violet-700 w-16 rounded-lg rounded-tl-none rounded-br-none px-4 -mb-6 ml-auto font-semibold flex z-0 text-white">New</span> : <></> }
                                
                                <img className="max-sm:h-40 h-64 w-full rounded-md object-cover" src={import.meta.env.VITE_API_URL + product.attributes.image.data.attributes.url} alt="product image" />
                            </Link>
                            <div className='flex m-2 mb-0'>
                                <p className="max-sm:px-2 bg-violet-700 w-fit rounded-full px-4 m-2 font-bold flex text-white">${product.attributes.price}</p>
                                {product.attributes.oldPrice ? <p className="max-sm:pr-1 w-fit rounded-full pr-4 my-2 font-medium  flex text-red-700 line-through">${product.attributes.oldPrice}</p> : <p>{' '}</p>}
                                
                                
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
                                    <span className="text-gray-400 ml-1 font-extralight">|67 Reviews</span>
                                </span>
                            </div>
                            <Link to={`/products/${product.id}`} >
                                <h2 className='max-sm:font-medium font-semibold px-4 line-clamp-1'>{product.attributes.Title}</h2>
                                <p className='max-sm:font-light text-gray-500 px-4 outline-none line-clamp-2'>{product.attributes.Desc}</p>
                            </Link>
                            
                            <div className='mx-4'>
                                <button onClick={()=>dispatch(addToCart({
                                    id: product.id,
                                    title: product.attributes.Title,
                                    desc: product.attributes.Desc,
                                    price: product.attributes.price,
                                    image: product.attributes.image.data.attributes.url,
                                    categories: Array.isArray(product.attributes.categories)
                                    ? product.attributes.categories.map(category => category.attributes.title)
                                    : ['Default Category'],


                                }))} 

                                
                                className='shadow-md bg-violet-700 rounded-md py-2 mb-4 w-full text-white hover:scale-105 transition-all ease-in-out duration-100'>Add to Cart</button>
                            </div>
                            
                        </div>
                    ))}

                
                
            </div>
            {/* /Products card section */}
            {/* pagination section */}

            {/* <ReactPaginate 
                breakLabel={<span className="mr-4">...</span>}
                nextLabel ={
                    <span className="w-10 h-10 flex items-center justify-center bg-violet-700 text-white rounded-md">
                        <BsChevronRight />
                    </span>
                }
                //onChange = {handlePageClick}
                pageRangeDisplayed={3}
                pageCount={15}
                previousLabel={
                    <span className="w-10 h-10 flex items-center justify-center bg-violet-700 text-white rounded-md mr-4">
                        <BsChevronLeft />
                    </span>
                }
                containerClassName="flex items-center justify-center mt-8 mb-4"
                pageClassName="block border bprder-solid border-violet-300 hover:bg-violet-700 hover:text-white w-10 h-10 flex items-center justify-center rounded-md mr-4"
                activeClassName="bg-violet-700 text-white"
            /> */}



            <section className="py-10">
                <div className="container mx-auto">
                    <div className=" flex flex-wrap ">
                        <div className=" w-full px-4 items-center justify-center">
                            <div className="mb-12  rounded-md border border-none py-4 shadow-2xl max-sm:px-1 px-24 bg-white w-fit mx-auto" >
                                <ul className=" -mx-[6px] flex ">
                                    <li className="px-[6px]">
                                    <a href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-md border border-violet-700 text-base text-violet-700 hover:scale-110"
                                    >
                                        <span>
                                        <svg
                                            width="8"
                                            height="15"
                                            viewBox="0 0 8 15"
                                            className="fill-current stroke-current"
                                        >
                                            <path
                                            d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z"
                                            strokeWidth="0.3"
                                            />
                                        </svg>
                                        </span>
                                    </a>
                                    </li>
                                    <li className="px-[6px]">
                                    <a
                                        href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-md border border-white text-base text-white bg-violet-700 hover:scale-110"
                                    >
                                        1
                                    </a>
                                    </li>
                                    <li className="px-[6px]">
                                    <a
                                        href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-md border border-violet-700 text-base text-violet-700 hover:scale-110"
                                    >
                                        2
                                    </a>
                                    </li>
                                    <li className="px-[6px]">
                                    <a
                                        href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-md border border-violet-700 text-base text-violet-700 hover:scale-110"
                                    >
                                        3
                                    </a>
                                    </li>
                                    <li className="px-[6px]">
                                    <a
                                        href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-md border border-violet-700 text-base text-violet-700 hover:scale-110"
                                    >
                                        4
                                    </a>
                                    </li>
                                    <li className="px-[6px]">
                                    <a
                                        href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-md border border-violet-700 text-base text-violet-700 hover:scale-110"
                                    >
                                        ...
                                    </a>
                                    </li>
                                    <li className="px-[6px]">
                                    <a
                                        href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-md border border-violet-700 text-base text-violet-700 hover:scale-110"
                                    >
                                        <span>
                                        <svg
                                            width="8"
                                            height="15"
                                            viewBox="0 0 8 15"
                                            className="fill-current stroke-current"
                                        >
                                            <path
                                            d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z"
                                            strokeWidth="0.3"
                                            />
                                        </svg>
                                        </span>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        
        </>
  )
}

export default ProductsList