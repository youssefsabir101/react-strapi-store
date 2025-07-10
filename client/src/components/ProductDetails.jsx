import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './staticPages/Footer';
import useFetch from '../hooks/useFetch';
import { addToCart } from './redux/cartReducer';
import { useDispatch } from 'react-redux';

function ProductDetails() {
  useEffect(() => {
    document.title = 'SabDecor | Product Details';
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState([]);
  const { data, loading, errors } = useFetch('/api/products?populate=*');
  useEffect(() => {
    data && setProducts(data);
  }, [data]);

  const { id } = useParams();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);
  

  
  //dynamic product images change
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    if (product) {
      setMainImage(import.meta.env.VITE_API_URL + product.attributes.image.data.attributes.url);
    }
  }, [product]);

  const dispatch = useDispatch();

  const switchMainImage = (newImage) => {
    setMainImage(import.meta.env.VITE_API_URL + newImage);
  };


  // Quantity handler
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    
    if (quantity < 100) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };



  if (product) {
    return (
      <> <Navbar />
        
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 pt-24 pb-8 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full h-auto object-cover object-center rounded">
                <img
                  alt="product image"
                  className="w-full lg:h-auto object-cover object-center rounded"
                  src={mainImage}
                />
                <div className="grid grid-cols-5 gap-4 mt-4">
                  <img
                        
                        src={import.meta.env.VITE_API_URL + product.attributes.image.data.attributes.url}
                        alt="product image"
                        className="w-full cursor-pointer border"
                        onClick={() =>
                          switchMainImage(product.attributes.image.data.attributes.url)
                        }
                      />
                  {product &&
                    ['image1', 'image2', 'image3', 'image4'].map((imageAttribute, index) => (
                      <img
                        key={index}
                        src={
                          import.meta.env.VITE_API_URL +
                          product.attributes[imageAttribute]?.data.attributes.url
                        }
                        alt={`product image ${index + 1}`}
                        className="w-full cursor-pointer border rounded-sm"
                        onClick={() =>
                          switchMainImage(product.attributes[imageAttribute]?.data.attributes.url)
                        }
                      />
                    ))}
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
                    <span className="text-gray-600 ml-3">(67) Reviews</span>
                  </span>
                </div>
                

                

                <div className='mb-4'>
                  <p className="leading-relaxed">
                      <span className="text-gray-800 font-semibold">Description: </span> 
                      <span className="text-gray-600 cursor-pointer">{product.attributes.Desc}</span>
                  </p>
                </div>

                <div className="space-y-1 mb-2">
                  <p className="space-x-2">
                      <span className="mr-3 text-gray-600">Brand : </span>
                      <span className="text-violet-500 cursor-pointer">{product.attributes.brand}</span>
                  </p>
                  <p className="space-x-2">
                      <span className="mr-3 text-gray-600">Category : </span>
                      {product.attributes.categories.data.map((category, index) => (
                        <span key={index} className="text-violet-500 cursor-pointer">
                          {category.attributes.title}  {' '}
                        </span>
                      ))}
                      

                  </p>
                </div>

                <div className="flex items-baseline mb-1 space-x-4 font-roboto mt-6">
                  <p className="title-font font-bold text-2xl text-gray-900">${product.attributes.price}</p>
                  {product.attributes.oldPrice ? <p className="max-sm:pr-1 w-fit rounded-full pr-4 my-2 font-medium  flex text-red-700 line-through">${product.attributes.oldPrice}</p> : <p>{' '}</p>}
                </div>

                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3 text-gray-600">Color : </span>
                        {product.attributes.color.data.map((color, index) => (
                              
                              <div key={index} className="flex items-center rounded-md w-6 h-6 bg-black border border-violet-200 transition-all ease-in-out duration-200"
                              style={{ backgroundColor: color.attributes.name.toLowerCase() }} >
                                  <input type="checkbox" id="black" data-color="2" 
                                      className="w-16 h-6 filterColor-checkbox " alt={color.attributes.name.toLowerCase()} title={color.attributes.name.toLowerCase()} />
                              </div>
                          ))}

                  </div>
                </div>
            
                <div className="mt-8 flex flex-row max-sm:flex-wrap items-center justify-between ">
                  <div className="mb-4 lg:mb-0 lg:mr-4 ">
                    <div className="w-28 py-2">
                      <div className="flex flex-row w-full h-10 bg-transparent rounded-lg">
                        <button
                          onClick={decrement}
                          className="w-20 h-full border border-violet-700 text-gray-900 bg-gray-100 border-r rounded-l outline-none cursor-pointer hover:bg-gray-300"
                        >
                          <span className="m-auto text-2xl font-thin">-</span>
                        </button>

                        <input
                          type="number"
                          className="flex items-center w-full border-y border-violet-700 font-semibold text-center text-gray-900 placeholder-gray-900 bg-gray-100 outline-none focus:outline-none text-md"
                          min={1}
                          max={100}
                          value={quantity}
                        />

                        <button
                          onClick={increment}
                          className="w-20 h-full border border-violet-700 text-gray-900 bg-gray-100 border-l rounded-r outline-none cursor-pointer hover:bg-gray-300"
                        >
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>


                  <div className="mb-4 lg:mb-0">
                    <div className="py-2">
                      <div className="flex flex-row w-full h-10 bg-transparent rounded-lg">
                          <button
                            onClick={() =>
                              dispatch(addToCart({
                                id: product.id,
                                title: product.attributes.Title,
                                desc: product.attributes.Desc,
                                price: product.attributes.price,
                                quantity: quantity, // Pass the quantity here
                                image: product.attributes.image.data.attributes.url,
                                categories: Array.isArray(product.attributes.categories)
                                  ? product.attributes.categories.map(category => category.attributes.title)
                                  : ['Default Category'],
                              }))
                            }
                            className="flex ml-auto text-white bg-violet-700 border-0 py-2 px-6 focus:outline-none hover:bg-violet-900 rounded "
                          >
                            ADD TO CART
                        </button>

                        

                        
                      </div>
                    </div>
                  </div>
                  
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
                <tbody>
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
                </tbody>
              </table>

          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ProductDetails;
