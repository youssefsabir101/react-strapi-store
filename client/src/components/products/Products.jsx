import Navbar from "../navbar/Navbar"
import ProductsList from "./ProductsList";
import Footer from "../staticPages/Footer";
import { useState, useEffect, useContext } from "react";
import StoreContext from '../../hooks/storeContext';
import useFetch from '../../hooks/useFetch';
import { FaFilter, FaSearch } from "react-icons/fa";

import qs from "qs";// strapi query

// filter section component 
function FilterSidebar () {
    //get data from api
    const [categories,setCategories] =useState([]);
    const {data, loading} = useFetch("/api/categories?populate=*");

    useEffect(()=>{
    data && setCategories(data)
    },[data])

    //get -,-,- from Store
    const {setFilter, selectedCategories, setSelectCategories} = useContext(StoreContext)

    // filter : multi cetrgories ----------------------------  
    useEffect(() => {
        const query = qs.stringify({  //using strapi query 
            filters: {
                categories: {
                    id: {
                        $in: selectedCategories
                    }
                }
            }
        });
        setFilter(import.meta.env.VITE_API_URL+"/api/products?populate=*&"+query)
    },[selectedCategories])
    //handle filter categories function
    const handleFilters = (e) =>{
        const selectedID = e.target.dataset.category
        const isChecked = e.target.checked
        setSelectCategories(selectedCategories => {
           if(isChecked) return [...selectedCategories,selectedID]
           return selectedCategories.filter(id => id !== selectedID)
        })   
    }
    //filter : chois all categories
    /* const handleFilterCategoryAll = (e) =>{
        if (e.target.checked){
        setFilter("http://localhost:1337/api/products?populate=*") //if choise one category
        }
        
    } */

    //range input for selecting both minimum and maximum prices 
    
    const [priceRange, setPriceRange] = useState([0, 100]); // Initial price range

    const handleChange = (event) => {
      const newValue = parseInt(event.target.value, 10);
      const thumbValue = event.target.getAttribute('data-thumb');
  
      if (thumbValue === 'min') {
        setPriceRange([newValue, priceRange[1]]);
      } else {
        setPriceRange([priceRange[0], newValue]);
      }
    };

    return(
                <div className="w-full py-10 h-full divide-y divide-gray-200 space-y-5 ">
                    <div className="  px-4">
                        <div>
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                            <div className="space-y-1">
                                {/* <div className="flex items-center rounded-md px-4 h-9 text-gray-600 hover:bg-violet-700 hover:text-white transition-all ease-in-out duration-200">
                                    <input type="checkbox" id="checkAll" 
                                        className="text-violet-700 focus:ring-0 rounded-sm cursor-pointer" />
                                    <label htmlFor="checkAll" className="font-semibold w-full  ml-3 cursor-pointer">All</label>                               
                                </div> */}

                                {loading ? "Loading..."
                                            : categories.map(category => ( 
                                                <div key={category.id} className="flex items-center rounded-md px-4 h-9 text-gray-600 hover:bg-violet-700 hover:text-white transition-all ease-in-out duration-200">
                                                    <input type="checkbox" onChange={handleFilters} id={category.id} data-category={category.id}
                                                        className="h-5 w-5 text-violet-700 rounded border-2 border-violet-700 focus:ring-violet-700" />
                                                    <label htmlFor={category.id} className="w-full  ml-3 cursor-pointer">{category.attributes.title}</label>
                                                    {/* <div className="ml-auto text-gray-600 text-sm">16</div> */}                               
                                                </div>
                                ))}
                            </div>
                        </div>
    
                        {/* <div className="pt-4 mr-4">
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
                            <div className="space-y-2">
                                all
                            </div>
                        </div> */}
    
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
                        </div>{/* 

                        <div className="flex items-center space-x-4">
                            <label className="text-gray-600">{priceRange[0]}</label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={priceRange[0]}
                                data-thumb="min"
                                onChange={handleChange}
                                className="w-72 appearance-none h-2 rounded-full outline-none "
                                style={{
                                background: `linear-gradient(to right, #68D391 0%, #68D391 ${(priceRange[0] / 100) * 100}%, #CBD5E0 ${(priceRange[0] / 100) * 100}%, #CBD5E0 100%)`,
                                }}
                            />
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={priceRange[1]}
                                data-thumb="max"
                                onChange={handleChange}
                                className="w-72 appearance-none h-2 rounded-full outline-none"
                                style={{
                                background: `linear-gradient(to right, #68D391 0%, #68D391 ${(priceRange[0] / 100) * 100}%, #CBD5E0 ${(priceRange[0] / 100) * 100}%, #CBD5E0 ${(priceRange[1] / 100) * 100}%, #68D391 ${(priceRange[1] / 100) * 100}%, #68D391 100%)`,
                                }}
                            />
                            <label className="text-gray-600">{priceRange[1]}</label>
                        </div> */}
    
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
    )
}
// ./end filter section component

function Products() {
    //dynamic title
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        document.title="SabDecor | Products";
      },[]);
    //start page from top 
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      return (
        <>
        <Navbar />
          
        <div className="lg:container mx-auto md:w-full pt-20 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-2  ">
            {/* sidebar */}
            <div className=" col-span-1 w-full pb-6 shadow-2xl rounded overflow-hiddenb hidden lg:block bg-white h-fit">
                {/* filter */}
                <FilterSidebar />
                
            </div>
            {/* ./sidebar */}
    
            {/*  products content */}
            <div className="col-span-3">
                {/* TopMenu */}
                <div className="mx-4 grid max-sm:grid-cols-1 grid-cols-3 gap-4 py-4">
                    
                    
                    <div className="max-sm:w-full h-10 col-span-2 py-6 flex items-center justify-between">

                        <form className="flex flex-1">
                            <input
                            type="text"
                            className="w-full h-10 px-4 text-violet-700 border-2 border-violet-700 outline-none rounded-tl rounded-bl"
                            placeholder="Search"
                            />
                            <button className="w-20 h-10 flex items-center justify-center text-white bg-violet-700 rounded-tr rounded-br cursor-pointer">
                                <FaSearch />
                            </button>
                        </form>
                    </div>

                    
                    <div className=" w-full h-10 col-span-1 py-1">

                        <div className="flex gap-2 float-right mr-3 max-sm:-mr-3">
                            <div className="border w-fit h-10 flex items-center justify-center text-white bg-violet-700 rounded cursor-pointer">
                                <select name="sort" id="sort"
                                    className="w-full h-10 text-white font-normal bg-violet-700  shadow-lg rounded outline-none px-4">
                                    <option value=""  className="">Default sorting</option>
                                    <option value="price-low-to-high" className="">Price low to high</option>
                                    <option value="price-high-to-low" className="">Price high to low</option>
                                    <option value="latest" className="">Latest product</option>
                                </select>
                            </div>
                            <div className="lg:hidden w-16 h-10 border bg-violet-700 text-white flex items-center justify-center rounded cursor-pointer">
                                <button
                                    aria-label="Filter"
                                    title="Open Menu"
                                    className="w-16"
                                    onClick={() => setIsMenuOpen(true)}
                                >
                                  Filter  <FaFilter className="inline-block"/>
                                </button>
                                {isMenuOpen && (
                                    <div className=" top-40 right-0  mx-2 absolute z-40">
                                        <div className="p-5 bg-white border rounded-lg shadow-2xl ">
                                            <div className="flex items-center justify-between mb-4">
                                            <div className="">
                                                <span className="ml-2 text-xl font-bold text-gray-800 uppercase">
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
                                            <FilterSidebar />
                                            {/* <div className="divide-y divide-gray-200 space-y-5">
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
    
                                                
    
                                            </div> */}
                                            
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* ./TopMenu */}

                {/* Products List */}
                <ProductsList />
    
                
            </div>
            {/* ./products content */}
        </div>
    
        <Footer />
        </>
      )
}

export default Products








