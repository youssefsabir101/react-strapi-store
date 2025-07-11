"use client"

import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "./redux/cartReducer"

const ProductCard = ({ product, showAddToCart = true, className = "" }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()

    dispatch(
      addToCart({
        id: product.id,
        title: product.attributes.Title,
        desc: product.attributes.Desc,
        price: product.attributes.price,
        image: product.attributes.image.data.attributes.url,
      }),
    )
  }

  return (
    <div
      className={`bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group ${className}`}
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          {product.attributes.isFeatured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                New
              </span>
            </div>
          )}

          {product.attributes.oldPrice && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">Sale</span>
            </div>
          )}

          <img
            className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            src={import.meta.env.VITE_API_URL + product.attributes.image.data.attributes.url || "/placeholder.svg"}
            alt={product.attributes.Title}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      <div className="p-6">
        {/* Price Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-violet-700">${product.attributes.price}</span>
            {product.attributes.oldPrice && (
              <span className="text-lg text-red-500 line-through font-medium">${product.attributes.oldPrice}</span>
            )}
          </div>
          {product.attributes.oldPrice && (
            <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
              Save ${(product.attributes.oldPrice - product.attributes.price).toFixed(2)}
            </div>
          )}
        </div>

        {/* Rating Section */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${index < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">(4.8) • 67 Reviews</span>
        </div>

        {/* Product Info */}
        <Link to={`/products/${product.id}`} className="block mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-violet-700 transition-colors">
            {product.attributes.Title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">{product.attributes.Desc}</p>
        </Link>

        {/* Action Buttons */}
        {showAddToCart && (
          <div className="flex space-x-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9"
                />
              </svg>
              Add to Cart
            </button>

            <Link
              to={`/products/${product.id}`}
              className="bg-white border-2 border-violet-200 text-violet-700 py-3 px-4 rounded-xl font-semibold hover:bg-violet-50 hover:border-violet-300 transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
