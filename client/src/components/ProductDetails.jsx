import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar"
import Footer from "./Footer";
import useFetch from "../hooks/useFetch";


function ProductDetails() {
  useEffect(() => {
    document.title="Decory | Product Details";
  },[]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //get products from api
  const [products,setProducts] =useState([]);
  const {data, loading, errors} = useFetch("/api/products?populate=*");
  useEffect(()=>{
     data && setProducts(data)
  },[data])

  //use the useParams hook to get the product id from the route
  /* const { id } = useParams<{ id: string }>(); */
  const { id } = useParams();

  // Convert the id to a number
  const productId = Number(id);

  //find the product that matches the id from the array
  const product = products.find((p) => p.id === productId);

  //check if the product exist...
  if (product ) {
    return (
      <>
      <Navbar />
      
      
        <section className="text-gray-600 body-font overflow-hidden">
          
          <div className="container px-5 pt-24 pb-8 mx-auto" >
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full h-auto object-cover object-center rounded">
                <img
                  alt="ecommerce"
                  className="w-full lg:h-auto object-cover object-center rounded"
                  src={import.meta.env.VITE_API_URL + product.attributes.image.data.attributes.url}
                />
                
                <div className=" grid grid-cols-4 gap-4 mt-4">
                    <img src={import.meta.env.VITE_API_URL + product.attributes.image.data.attributes.url} alt="product2" className="w-full cursor-pointer border"/>
                    <img src={import.meta.env.VITE_API_URL + product.attributes.image.data.attributes.url} alt="product2" className="w-full cursor-pointer border"/>
                    <img src={import.meta.env.VITE_API_URL + product.attributes.image.data.attributes.url} alt="product2" className="w-full cursor-pointer border"/>
                    <img src={import.meta.env.VITE_API_URL + product.attributes.image.data.attributes.url} alt="product2" className="w-full cursor-pointer border"/>
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-3xl title-font text-black tracking-widest">
                  <span className="text-sm text-violet-700">Id : {product.id}</span>
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.attributes.Title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    {[...Array(4)].map((_, index) => (
                      <svg
                        key={index}
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-violet-700"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    ))}
                    <span className="text-gray-600 ml-3">(142) Reviews</span>
                  </span>
                </div>
                <div className="space-y-1 mb-4">
                  <p className="text-gray-800 font-semibold space-x-2">
                      <span>Availability: </span>
                      <span className="text-green-600">In Stock</span>
                  </p>
                  <p className="space-x-2">
                      <span className="text-gray-800 font-semibold">Brand: </span>
                      <span className="text-gray-600">Apex</span>
                  </p>
                  <p className="space-x-2">
                      <span className="text-gray-800 font-semibold">Category: </span>
                      <span className="text-gray-600">Sofa</span>
                  </p>
                  <p className="space-x-2">
                      <span className="text-gray-800 font-semibold">SKU: </span>
                      <span className="text-gray-600">BE45VGRT</span>
                  </p>
                </div>

                <div className="flex items-baseline mb-1 space-x-4 font-roboto mt-4">
                  <p className="title-font font-bold text-2xl text-gray-900">${product.attributes.price}</p>
                  {/* <p className="text-base text-gray-400 line-through">$55.00</p> */}
                </div>

                <p className="leading-relaxed">
                  {product.attributes.Desc}
                </p>
                <div className="mt-4">
                  <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                  <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                      <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                      <div className="h-8 w-8 text-base flex items-center justify-center">4</div>
                      <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                  </div>
                </div>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    {[...Array(3)].map((_, index) => (
                      <button
                        key={index}
                        className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none${
                          index !== 0 ? ` ml-1 bg-${index === 2 ? 'purple-500' : 'gray-700'} ` : ''
                        }`}
                      ></button>
                    ))}
                  </div>
                  {/* <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div> */}
                </div>
                <div className="flex">
                  
                  <button className="flex ml-auto text-white bg-violet-700 border-0 py-2 px-6 focus:outline-none hover:bg-violet-900 rounded">
                    ADD TO CART
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container px-5 pb-24 mx-auto">
          <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">Product details</h3>
          <div className=" pt-6">
              <div className="text-gray-600">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus deleniti natus
                      dolore cum maiores suscipit optio itaque voluptatibus veritatis tempora iste facilis non aut
                      sapiente dolor quisquam, ex ab.
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae accusantium voluptatem
                      blanditiis sapiente voluptatum. Autem ab, dolorum assumenda earum veniam eius illo fugiat possimus
                      illum dolor totam, ducimus excepturi
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia modi ut expedita! Iure molestiae
                      labore cumque nobis quasi fuga, quibusdam rem? Temporibus consectetur corrupti rerum veritatis
                      numquam labore amet.
                  </p>
              </div>

              <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                  <tr>
                      <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                      <th className="py-2 px-4 border border-gray-300 ">Blank, Brown, Red</th>
                  </tr>
                  <tr>
                      <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
                      <th className="py-2 px-4 border border-gray-300 ">Latex</th>
                  </tr>
                  <tr>
                      <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
                      <th className="py-2 px-4 border border-gray-300 ">55kg</th>
                  </tr>
              </table>
          </div>
        </div>

        

        <Footer />
        </>
    )
  }
}

export default ProductDetails