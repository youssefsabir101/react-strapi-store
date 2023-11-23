import Navbar from "./Navbar"
import product1 from '../assets/products/product1.jpg';
import product2 from '../assets/products/product2.jpg';
import product3 from '../assets/products/product3.jpg';
import product4 from '../assets/products/product4.jpg';
import product5 from '../assets/products/product5.jpg';
import product6 from '../assets/products/product6.jpg';
import product7 from '../assets/products/product7.jpg';
import product8 from '../assets/products/product8.jpg';
import product9 from '../assets/products/product9.jpg';
import product10 from '../assets/products/product10.jpg';
import product11 from '../assets/products/product11.jpg';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
// Define the type of the product
type Product = {
    id: number;
    name: string;
    imageSrc: string;
    price: number;
    description: string;
    brandName: string;
};
const products: Product[] = [
    {
      id: 0,
      name: 'VintageBag',
      brandName: 'ZZ',
      price: 71,
      imageSrc: product8,
      description: 'classNameic vintage leather bag with multiple compartments and adjustable strap.',
    },
    {
        id: 1,
        name: 'Earthen Bottle',
        brandName: 'AA',
        price: 48,
        imageSrc: product1,
        description: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 2,
        name: 'Nomad Tumbler',
        brandName: 'BB',
        price: 35,
        imageSrc: product2,
        description: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 3,
        name: 'Focus Paper Refill',
        brandName: 'CC',
        price: 89,
        imageSrc: product3,
        description: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 4,
        name: 'Machined Mechanical Pencil',
        brandName: 'DD',
        price: 35,
        imageSrc: product4,
        description: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 5,
        name: 'Artisanal Wooden Desk',
        brandName: 'EE',
        price: 120,
        imageSrc: product5,
        description: 'Handcrafted wooden desk with drawers and vintage aesthetic.',
      },
      {
        id: 6,
        name: 'Leather Office Chair',
        brandName: 'FF',
        price: 199,
        imageSrc: product6,
        description: 'Luxurious leather office chair with ergonomic design and cushioned seat.',
      },
      {
        id: 7,
        name: 'Modern Desk Lamp',
        brandName: 'GG',
        price: 45,
        imageSrc: product7,
        description: 'Sleek and minimalist modern desk lamp with adjustable arm and LED lighting.',
      },
      {
        id: 8,
        name: 'Vintage Leather Bag',
        brandName: 'HH',
        price: 75,
        imageSrc: product8,
        description: 'classNameic vintage leather bag with multiple compartments and adjustable strap.',
      },
      {
        id: 9,
        name: 'Office Leather Chair',
        brandName: 'II',
        price: 189,
        imageSrc: product9,
        description: 'Luxurious leather office chair with ergonomic design and cushioned seat.',
      },
      {
        id: 10,
        name: 'Desk Lamp',
        brandName: 'JJ',
        price: 55,
        imageSrc: product10,
        description: 'Sleek and minimalist modern desk lamp with adjustable arm and LED lighting.',
      },
      {
        id: 11,
        name: 'Leather Vintage Bag',
        brandName: 'KK',
        price: 65,
        imageSrc: product11,
        description: 'classNameic vintage leather bag with multiple compartments and adjustable strap.',
      },{
        id: 12,
        name: 'Earthen Bottle',
        brandName: 'LL',
        price: 48,
        imageSrc: product1,
        description: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 13,
        name: 'Nomad Tumbler',
        brandName: 'MM',
        price: 35,
        imageSrc: product2,
        description: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 14,
        name: 'Focus Paper Refill',
        brandName: 'NN',
        price: 89,
        imageSrc: product3,
        description: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 15,
        name: 'Machined Mechanical Pencil',
        brandName: 'OO',
        price:35,
        imageSrc: product4,
        description: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 16,
        name: 'Artisanal Wooden Desk',
        brandName: 'PP',
        price: 120,
        imageSrc: product5,
        description: 'Handcrafted wooden desk with drawers and vintage aesthetic.',
      },
      {
        id: 17,
        name: 'Leather Office Chair',
        brandName: 'QQ',
        price: 199,
        imageSrc: product6,
        description: 'Luxurious leather office chair with ergonomic design and cushioned seat.',
      },
  ];

const categories =[
    {
        name: 'bed room',
        number: 30
    },
    {
        name: 'living room',
        number: 50
    },
    {
        name: 'Sofas',
        number: 87
    }
]
const brands =[
    {
        name: 'Magniflex',
        items: 19
    },
    {
        name: 'natur',
        items: 20
    },
    {
        name: 'cotonAi',
        items: 65
    }
]

function ProductList() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        document.title="Decory | Products";
      },[]);
    /* useEffect(() => {
        window.scrollTo(0, 0);
      }, []); */
  return (
    <>
    <Navbar />
      {/* <div classNameName="bg-white">
          <div classNameName="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
          <h2 classNameName="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

          <div classNameName="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-1 bg-red">
          {products.map((product) => (
                    <div classNameName="shadow-xl md:max-w-[320px] sm:max-w-full mx-4 rounded-md bg-white">
                    <img classNameName="h-64 w-full rounded-md object-cover" src={product.imageSrc} alt="product image" />
                    <div classNameName='flex m-2'>
                        <p classNameName="bg-violet-700 w-14 rounded-full px-4 m-2 font-bold flex text-white">{product.price}</p>
                        
                        
                        
                        <div classNameName='flex items-center ml-auto '>
                            <span classNameName='bg-gray-100 shadow-xl w-10 h-10 rounded-full items-center justify-center inline-flex cursor-pointer'>
                                <svg
                                    fill="white"
                                    stroke="black"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    classNameName="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <h2 classNameName='font-semibold px-4'>{product.name}</h2>
                    
                    <p classNameName='text-gray-500 px-4'>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>
                        <div classNameName='mx-4'>
                            <button classNameName='shadow-md bg-violet-700 rounded-md py-2 mb-4 w-full text-white'>Add to Cart</button>
                        </div>
                    
                    </p>
                </div>
                ))}
          </div>
          </div>
      </div> */}

      {/* <div classNameName="lg:container mx-auto pb-16  w-full ">
        <h2 classNameName="text-2xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
        <div classNameName="grid mx-12 sm:mx-2 sm:grid-cols-2 md:mx-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 md:gap-0 ">
            {products.map((product) => (
                <div classNameName="shadow-xl sm:mx-2 md:mx-1 lg:mx-4 rounded-md bg-white my-2">
                    <img classNameName="h-64 w-full rounded-md object-cover" src={product.imageSrc} alt="product image" />
                    <div classNameName='flex m-2'>
                        <p classNameName="bg-violet-700 w-14 rounded-full px-4 m-2 font-bold flex text-white">{product.price}</p>
                        
                        
                        
                        <div classNameName='flex items-center ml-auto '>
                            <span classNameName='bg-gray-100 shadow-xl w-10 h-10 rounded-full items-center justify-center inline-flex cursor-pointer'>
                                <svg
                                    fill="white"
                                    stroke="black"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    classNameName="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <h2 classNameName='font-semibold px-4'>{product.name}</h2>
                    
                    <p classNameName='text-gray-500 px-4'>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>
                        <div classNameName='mx-4'>
                            <button classNameName='shadow-md bg-violet-700 rounded-md py-2 mb-4 w-full text-white'>Add to Cart</button>
                        </div>
                    
                    </p>
                </div>
            ))}
            
        </div>
      </div> */}


<div className="lg:container mx-auto md:w-full pt-20 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-2  ">
        {/* sidebar */}
        <div className=" col-span-1 w-full pb-6 shadow-2xl rounded overflow-hiddenb hidden lg:block bg-white ">
            <div className="fixed flex-initial xl:w-1/5 lg:w-[18%] divide-y divide-gray-200 space-y-3">
                <div className="  px-4">
                    <div >
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                        <div className="space-y-2">
                            {categories.map((category,id) => ( 
                                <div key={id} className="flex items-center">
                                    <input type="checkbox" name="cat-1" id="cat-1"
                                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                    <label  className="text-gray-600 ml-3 cursor-pointer hover:text-violet-700 transition-all ease-in-out duration-100">{category.name}</label>
                                    <div className="ml-auto text-gray-600 text-sm">{category.number}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 mr-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
                        <div className="space-y-2">
                            {brands.map((brand, id) => (
                                <div key={id} className="flex items-center">
                                    <input type="checkbox" name="brand-1" id="brand-1"
                                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                    <label  className="text-gray-600 ml-3 cursor-pointer hover:text-violet-700 transition-all ease-in-out duration-100">{brand.name}</label>
                                    <div className="ml-auto text-gray-600 text-sm">{brand.items}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                        <div className="mt-4 flex items-center">
                            <input type="text" name="min" id="min"
                                className="w-full border border-violet-700 rounded px-3 py-1 text-gray-600 shadow-sm outline-none"
                                placeholder="min"/>
                            <span className="mx-3 text-gray-500">-</span>
                            <input type="text" name="max" id="max"
                                className="w-full border border-violet-700 rounded  px-3 py-1 text-gray-600 shadow-sm outline-none"
                                placeholder="max"/>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
                        <div className="flex items-center gap-2">
                            <div className="color-selector">
                                <input type="radio" name="color" id="red" className="hidden"/>
                                <label className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block bg-violet-700" ></label>
                            </div>
                            <div className="color-selector">
                                <input type="radio" name="color" id="red" className="hidden"/>
                                <label className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block bg-black" ></label>
                            </div>
                            <div className="color-selector">
                                <input type="radio" name="color" id="red" className="hidden"/>
                                <label className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block bg-white" ></label>
                            </div>
                            <div className="color-selector">
                                <input type="radio" name="color" id="red" className="hidden"/>
                                <label className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block bg-gray-500" ></label>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ./sidebar */}

        {/*  products */}
        <div className="col-span-3">
            {/* TopMenu */}
            <div className="mx-4 grid max-sm:grid-cols-1 grid-cols-4 gap-2">
                
                <div className="max-sm:w-full h-10 col-span-2">
                        <form action="" className="flex">
                            <input type="text"  className="w-5/6 h-10 flex items-center justify-center text-violet-700 p-4 border-2 border-violet-700 outline-none rounded-tl rounded-bl" placeholder="serch"/>
                            <button className="w-1/6 h-10 flex items-center justify-center text-white bg-violet-700 rounded-tr rounded-br cursor-pointer">serch</button>
                        </form>
                </div>
                <div className="w-full h-10 col-span-1 ">
                    <select name="sort" id="sort"
                        className="w-full h-10 text-white bg-violet-700  shadow-lg rounded outline-none">
                        <option value=""  className="">Default sorting</option>
                        <option value="price-low-to-high" className="">Price low to high</option>
                        <option value="price-high-to-low" className="">Price high to low</option>
                        <option value="latest" className="">Latest product</option>
                    </select>
                </div>
                <div className=" w-full h-10 col-span-1">
                    <div className="flex gap-2 float-right">
                        <div className="border w-16 h-10 flex items-center justify-center text-white bg-violet-700 rounded cursor-pointer">
                            <span className="fa-solid fa-grip-vertical">Viwe</span>
                        </div>
                        <div className="lg:hidden w-16 h-10 border bg-violet-700 flex rounded cursor-pointer">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="w-full px-2 transition duration-200 rounded focus:outline-none focus:shadow-outline text-center text-white"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                Filter
                            </button>
                            {isMenuOpen && (
                                <div className="absolute top-20 right-0  mx-2">
                                    <div className="p-5 bg-white border rounded-lg shadow-2xl">
                                        <div className="flex items-center justify-between mb-4">
                                        <div className="">
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                Filter
                                            </span>
                                        </div>
                                        <div>
                                            <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                            >
                                            <svg className="w-5 text-violet-700" viewBox="0 0 24 24">
                                                <path
                                                fill="currentColor"
                                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                            </button>
                                        </div>
                                        </div>
                                        <div className="divide-y divide-gray-200 space-y-5">
                                            <div>
                                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                                                <div className="space-y-2">
                                                    {categories.map((category, id) => ( 
                                                        <div key={id} className="flex items-center">
                                                            <input type="checkbox" name="cat-1" id="cat-1"
                                                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                                            <label  className="text-gray-600 ml-3 cursor-pointer hover:text-violet-700 transition-all ease-in-out duration-100">{category.name}</label>
                                                            <div className="ml-auto text-gray-600 text-sm">{category.number}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="pt-4">
                                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
                                                <div className="space-y-2">
                                                    {brands.map((brand, id) => (
                                                        <div key={id} className="flex items-center">
                                                            <input type="checkbox" name="brand-1" id="brand-1"
                                                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                                            <label  className="text-gray-600 ml-3 cursor-pointer hover:text-violet-700 transition-all ease-in-out duration-100">{brand.name}</label>
                                                            <div className="ml-auto text-gray-600 text-sm">{brand.items}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="pt-4">
                                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                                                <div className="mt-4 flex items-center">
                                                    <input type="text" name="min" id="min"
                                                        className="w-full border border-violet-700 rounded px-3 py-1 text-gray-600 shadow-sm outline-none"
                                                        placeholder="min"/>
                                                    <span className="mx-3 text-gray-500">-</span>
                                                    <input type="text" name="max" id="max"
                                                        className="w-full border border-violet-700 rounded  px-3 py-1 text-gray-600 shadow-sm outline-none"
                                                        placeholder="max"/>
                                                </div>
                                            </div>

                                            <div className="pt-4">
                                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
                                                <div className="flex items-center gap-2">
                                                    <div className="color-selector">
                                                        <input type="radio" name="color" id="red" className="hidden"/>
                                                        <label className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block bg-violet-700" ></label>
                                                    </div>
                                                    <div className="color-selector">
                                                        <input type="radio" name="color" id="red" className="hidden"/>
                                                        <label className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block bg-black" ></label>
                                                    </div>
                                                    <div className="color-selector">
                                                        <input type="radio" name="color" id="red" className="hidden"/>
                                                        <label className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block bg-white" ></label>
                                                    </div>
                                                    <div className="color-selector">
                                                        <input type="radio" name="color" id="red" className="hidden"/>
                                                        <label className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block bg-gray-500" ></label>
                                                    </div>

                                                </div>
                                            </div>

                                            

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* ./TopMenu */}

            <div className="max-sm:grid-cols-2 mt-10 grid  sm:mx-2  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 lg:mx-0 xl:grid-cols-3 md:gap-0 ">
                {products.map((product,id) => (
                        <div key={id} className="shadow-xl max-sm:mx-1 sm:mx-2 md:mx-1 lg:mx-2 xl:mx-4 rounded-md bg-white my-2 cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
                            <Link to={`/products/${product.id}`}>
                                <img className="max-sm:h-40 h-64 w-full rounded-md object-cover" src={product.imageSrc} alt="product image" />
                            </Link>
                            <div className='flex m-2'>
                                <p className="max-sm:px2 bg-violet-700 w-14 rounded-full px-4 m-2 font-bold flex text-white">{product.price}</p>
                                
                                
                                
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
                            <Link to={`/products/${product.id}`}>
                                <h2 className='max-sm:font-medium font-semibold px-4'>{product.name}</h2>
                                <p className='max-sm:font-light text-gray-500 px-4 '>Lorem ipsum dolor sit amet consectetur.</p>
                            </Link>
                            
                            <div className='mx-4'>
                                <button className='shadow-md bg-violet-700 rounded-md py-2 mb-4 w-full text-white hover:scale-105 transition-all ease-in-out duration-100'>Add to Cart</button>
                            </div>
                            
                        </div>
                ))}

                
                
            </div>
            <section className="py-10">
                <div className="container mx-auto">
                    <div className=" flex flex-wrap ">
                        <div className=" w-full px-4 items-center justify-center">
                            <div className="mb-12  rounded-md border border-none py-4 shadow-2xl max-sm:px-1 px-24 bg-white w-fit mx-auto" >
                                <ul className=" -mx-[6px] flex ">
                                    <li className="px-[6px]">
                                    <a href="javascript:void(0)"
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
                                            stroke-width="0.3"
                                            />
                                        </svg>
                                        </span>
                                    </a>
                                    </li>
                                    <li className="px-[6px]">
                                    <a
                                        href="javascript:void(0)"
                                        className="flex h-9 w-9 items-center justify-center rounded-md border border-white text-base text-white bg-violet-700 hover:scale-110"
                                    >
                                        1
                                    </a>
                                    </li>
                                    <li className="px-[6px]">
                                    <a
                                        href="javascript:void(0)"
                                        className="flex h-9 w-9 items-center justify-center rounded-md border border-violet-700 text-base text-violet-700 hover:scale-110"
                                    >
                                        2
                                    </a>
                                    </li>
                                    <li className="px-[6px]">
                                    <a
                                        href="javascript:void(0)"
                                        className="flex h-9 w-9 items-center justify-center rounded-md border border-violet-700 text-base text-violet-700 hover:scale-110"
                                    >
                                        3
                                    </a>
                                    </li>
                                    <li className="px-[6px]">
                                    <a
                                        href="javascript:void(0)"
                                        className="flex h-9 w-9 items-center justify-center rounded-md border border-violet-700 text-base text-violet-700 hover:scale-110"
                                    >
                                        4
                                    </a>
                                    </li>
                                    <li className="px-[6px]">
                                    <a
                                        href="javascript:void(0)"
                                        className="flex h-9 w-9 items-center justify-center rounded-md border border-violet-700 text-base text-violet-700 hover:scale-110"
                                    >
                                        ...
                                    </a>
                                    </li>
                                    <li className="px-[6px]">
                                    <a
                                        href="javascript:void(0)"
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
                                            stroke-width="0.3"
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

            
        </div>
        {/* ./products */}
</div>

<Footer />
    </>
  )
}

export default ProductList