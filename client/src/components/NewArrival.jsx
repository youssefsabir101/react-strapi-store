import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";

import StoreContext from "../hooks/storeContext";
import { addToCart } from "./redux/cartReducer";
import {useDispatch} from "react-redux"

/* const products= [
  {
    id: 0,
    name: 'VintageBag',
    brandName: 'ZZ',
    price: 71,
    stat: 'New',
    imageSrc: product8,
    description: 'classNameic vintage leather bag with multiple compartments and adjustable strap.',
  },
  {
      id: 1,
      name: 'Earthen Bottle',
      brandName: 'AA',
      price: 48,
      stat: 'New',
      imageSrc: product1,
      description: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      brandName: 'BB',
      price: 35,
      stat: 'New',
      imageSrc: product2,
      description: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      brandName: 'CC',
      price: 89,
      stat: 'New',
      imageSrc: product3,
      description: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      brandName: 'DD',
      price: 35,
      stat: 'New',
      imageSrc: product4,
      description: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Artisanal Wooden Desk',
      brandName: 'EE',
      price: 120,
      stat: 'New',
      imageSrc: product5,
      description: 'Handcrafted wooden desk with drawers and vintage aesthetic.',
    },
    {
      id: 6,
      name: 'Leather Office Chair',
      brandName: 'FF',
      price: 199,
      stat: 'New',
      imageSrc: product6,
      description: 'Luxurious leather office chair with ergonomic design and cushioned seat.',
    },
    {
      id: 7,
      name: 'Modern Desk Lamp',
      brandName: 'GG',
      price: 45,
      stat: 'New',
      imageSrc: product7,
      description: 'Sleek and minimalist modern desk lamp with adjustable arm and LED lighting.',
    },
    {
      id: 8,
      name: 'Vintage Leather Bag',
      brandName: 'HH',
      price: 75,
      stat: 'New',
      imageSrc: product8,
      description: 'classNameic vintage leather bag with multiple compartments and adjustable strap.',
    },
    {
      id: 9,
      name: 'Office Leather Chair',
      brandName: 'II',
      price: 189,
      stat: 'New',
      imageSrc: product9,
      description: 'Luxurious leather office chair with ergonomic design and cushioned seat.',
    },
    {
      id: 10,
      name: 'Desk Lamp',
      brandName: 'JJ',
      price: 55,
      stat: 'New',
      imageSrc: product10,
      description: 'Sleek and minimalist modern desk lamp with adjustable arm and LED lighting.',
    },
    {
      id: 11,
      name: 'Leather Vintage Bag',
      brandName: 'KK',
      price: 65,
      stat: 'New',
      imageSrc: product11,
      description: 'classNameic vintage leather bag with multiple compartments and adjustable strap.',
    },{
      id: 12,
      name: 'Earthen Bottle',
      brandName: 'LL',
      price: 48,
      stat: 'New',
      imageSrc: product1,
      description: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 13,
      name: 'Nomad Tumbler',
      brandName: 'MM',
      price: 35,
      stat: 'New',
      imageSrc: product2,
      description: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 14,
      name: 'Focus Paper Refill',
      brandName: 'NN',
      price: 89,
      stat: 'New',
      imageSrc: product3,
      description: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 15,
      name: 'Machined Mechanical Pencil',
      brandName: 'OO',
      price:35,
      stat: 'New',
      imageSrc: product4,
      description: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 16,
      name: 'Artisanal Wooden Desk',
      brandName: 'PP',
      price: 120,
      stat: 'New',
      imageSrc: product5,
      description: 'Handcrafted wooden desk with drawers and vintage aesthetic.',
    },
    {
      id: 17,
      name: 'Leather Office Chair',
      brandName: 'QQ',
      price: 199,
      stat: 'New',
      imageSrc: product6,
      description: 'Luxurious leather office chair with ergonomic design and cushioned seat.',
    },
]; */

function NewArrival() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1280 },
          items: 4
        },
        tablet2: {
          breakpoint: { max: 1024, min: 860 },
          items: 3
        },
        tablet1: {
          breakpoint: { max:860, min: 640 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 2
        }
      };

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
    <div className='lg:container mx-auto  py-16 sm:px-6 sm:py-24   '>
      <span className='bg-violet-700 w-2 h-9 inline-block -mb-2'></span>
      <h2 className="inline-block text-2xl font-medium text-gray-800 uppercase pl-4 mb-6">Top New Arrival</h2>
            <Carousel responsive={responsive}
                      additionalTransfrom={0}
                      arrows
                      autoPlay
                      autoPlaySpeed={2000}
                      centerMode={false}
                      className="py-4"
                      containerClass="container-with-dots"
                      dotListClass=" "
                      draggable
                      focusOnSelect={false}
                      infinite
                      itemClass=""
                      keyBoardControl
                      minimumTouchDrag={80}
                      pauseOnHover
                      renderArrowsWhenDisabled={false}
                      renderButtonGroupOutside={false}
                      renderDotsOutside={false}
                    >

                {products.map((product,id) => (
                (product.attributes.isFeatured) && 
                        <div key={id} className="shadow-xl max-sm:mx-1 sm:mx-2 md:mx-1 lg:mx-2 xl:mx-4 rounded-md bg-white my-2 cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
                            <Link to={`/products/${product.id}`}>
                                {(product.attributes.isFeatured) ? <span className="relative bg-violet-700 w-16 rounded-lg rounded-tl-none rounded-br-none px-4 -mb-6 ml-auto font-semibold flex text-white">New</span> : <></> }
                                
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

            </Carousel>

        
    </div>
  )
}

export default NewArrival