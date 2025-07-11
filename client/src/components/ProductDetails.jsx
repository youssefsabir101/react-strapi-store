"use client"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import Footer from "./staticPages/Footer"
import useFetch from "../hooks/useFetch"
import { addToCart } from "./redux/cartReducer"
import { useDispatch } from "react-redux"

function ProductDetails() {
  useEffect(() => {
    document.title = "SabDecor | Product Details"
    window.scrollTo(0, 0)
  }, [])

  const [products, setProducts] = useState([])
  const { data, loading, errors } = useFetch("/api/products?populate=*")

  useEffect(() => {
    data && setProducts(data)
  }, [data])

  const { id } = useParams()
  const productId = Number(id)
  const product = products.find((p) => p.id === productId)

  // Dynamic product images change
  const [mainImage, setMainImage] = useState("")
  useEffect(() => {
    if (product) {
      setMainImage(import.meta.env.VITE_API_URL + product.attributes.image.data.attributes.url)
    }
  }, [product])

  const dispatch = useDispatch()
  const switchMainImage = (newImage) => {
    setMainImage(import.meta.env.VITE_API_URL + newImage)
  }

  // Quantity handler
  const [quantity, setQuantity] = useState(1)
  const increment = () => {
    if (quantity < 100) {
      setQuantity((prevQuantity) => prevQuantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 min-h-screen pt-20">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="animate-pulse">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="h-96 bg-violet-200 rounded-2xl"></div>
                  <div className="grid grid-cols-5 gap-2">
                    {[...Array(5)].map((_, index) => (
                      <div key={index} className="h-20 bg-violet-200 rounded-xl"></div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="h-8 bg-violet-200 rounded w-3/4"></div>
                  <div className="h-12 bg-violet-200 rounded w-full"></div>
                  <div className="h-6 bg-violet-200 rounded w-1/2"></div>
                  <div className="h-32 bg-violet-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (errors || !product) {
    return (
      <>
        <Navbar />
        <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 min-h-screen pt-20">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-12 text-center">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-4">Product Not Found</h3>
              <p className="text-red-600">The product you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Product Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden mb-8">
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl bg-gray-50">
                  <img
                    alt="product image"
                    className="w-full h-96 lg:h-[500px] object-cover object-center"
                    src={mainImage || "/placeholder.svg"}
                  />
                  {product.attributes.isFeatured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        New
                      </span>
                    </div>
                  )}
                  {product.attributes.oldPrice && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Sale
                      </span>
                    </div>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-5 gap-3">
                  <img
                    src={
                      import.meta.env.VITE_API_URL + product.attributes.image.data.attributes.url || "/placeholder.svg"
                    }
                    alt="product image"
                    className="w-full h-20 object-cover rounded-xl cursor-pointer border-2 border-violet-200 hover:border-violet-400 transition-all duration-200"
                    onClick={() => switchMainImage(product.attributes.image.data.attributes.url)}
                  />
                  {product &&
                    ["image1", "image2", "image3", "image4"].map(
                      (imageAttribute, index) =>
                        product.attributes[imageAttribute]?.data && (
                          <img
                            key={index}
                            src={
                              import.meta.env.VITE_API_URL + product.attributes[imageAttribute]?.data.attributes.url ||
                              "/placeholder.svg"
                            }
                            alt={`product image ${index + 1}`}
                            className="w-full h-20 object-cover rounded-xl cursor-pointer border-2 border-violet-200 hover:border-violet-400 transition-all duration-200"
                            onClick={() => switchMainImage(product.attributes[imageAttribute]?.data.attributes.url)}
                          />
                        ),
                    )}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="text-sm text-violet-600 font-medium mb-2">ID: {product.id}</div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.attributes.Title}</h1>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-5 h-5 ${index < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(67) Reviews</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-violet-700">${product.attributes.price}</span>
                  {product.attributes.oldPrice && (
                    <>
                      <span className="text-xl text-red-500 line-through font-medium">
                        ${product.attributes.oldPrice}
                      </span>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                        Save ${(product.attributes.oldPrice - product.attributes.price).toFixed(2)}
                      </div>
                    </>
                  )}
                </div>

                {/* Description */}
                <div className="bg-violet-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{product.attributes.Desc}</p>
                </div>

                {/* Product Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <span className="text-gray-600 font-medium">Brand:</span>
                    <span className="text-violet-600 font-semibold ml-2">{product.attributes.brand}</span>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <span className="text-gray-600 font-medium">Category:</span>
                    <div className="ml-2 inline-flex flex-wrap gap-1">
                      {product.attributes.categories.data.map((category, index) => (
                        <span key={index} className="text-violet-600 font-semibold">
                          {category.attributes.title}
                          {index < product.attributes.categories.data.length - 1 && ","}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Colors */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Available Colors:</h3>
                  <div className="flex space-x-3">
                    {product.attributes.color.data.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-violet-200 shadow-md"
                        style={{ backgroundColor: color.attributes.name.toLowerCase() }}
                        title={color.attributes.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-6 border-t border-gray-200">
                  {/* Quantity Selector */}
                  <div className="flex items-center">
                    <span className="text-gray-700 font-medium mr-4">Quantity:</span>
                    <div className="flex items-center border-2 border-violet-200 rounded-xl overflow-hidden">
                      <button
                        onClick={decrement}
                        className="w-12 h-12 bg-violet-50 hover:bg-violet-100 text-violet-700 font-bold transition-colors duration-200 flex items-center justify-center"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        className="w-16 h-12 text-center border-none outline-none font-semibold text-gray-900"
                        min={1}
                        max={100}
                        value={quantity}
                        readOnly
                      />
                      <button
                        onClick={increment}
                        className="w-12 h-12 bg-violet-50 hover:bg-violet-100 text-violet-700 font-bold transition-colors duration-200 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: product.id,
                          title: product.attributes.Title,
                          desc: product.attributes.Desc,
                          price: product.attributes.price,
                          quantity: quantity,
                          image: product.attributes.image.data.attributes.url,
                          categories: Array.isArray(product.attributes.categories)
                            ? product.attributes.categories.map((category) => category.attributes.title)
                            : ["Default Category"],
                        }),
                      )
                    }
                    className="flex-1 sm:flex-none px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9"
                      />
                    </svg>
                    <span>ADD TO CART</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent mx-4">
                  Product Details
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Description */}
                <div className="space-y-4">
                  <div className="text-gray-600 space-y-4 leading-relaxed">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus deleniti natus
                      dolore cum maiores suscipit optio itaque voluptatibus veritatis tempora iste facilis non aut
                      sapiente dolor quisquam, ex ab.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae accusantium voluptatem
                      blanditiis sapiente voluptatum. Autem ab, dolorum assumenda earum veniam eius illo fugiat possimus
                      illum dolor totam, ducimus excepturi
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia modi ut expedita! Iure
                      molestiae labore cumque nobis quasi fuga, quibusdam rem? Temporibus consectetur corrupti rerum
                      veritatis numquam labore amet.
                    </p>
                  </div>
                </div>

                {/* Specifications Table */}
                <div className="bg-violet-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Specifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-violet-200">
                      <span className="font-medium text-gray-700">Color</span>
                      <span className="text-gray-600">Black, Brown, Red</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-violet-200">
                      <span className="font-medium text-gray-700">Material</span>
                      <span className="text-gray-600">Latex</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium text-gray-700">Weight</span>
                      <span className="text-gray-600">55kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetails
