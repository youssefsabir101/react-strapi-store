"use client"
import { useState, useEffect, useContext } from "react"
import useFetch from "../../hooks/useFetch"
import StoreContext from "../../hooks/storeContext"
import ProductCard from "../ProductCard"
import SkeletonLoader from "./SkeletonLoader"

function ProductsList({ inputSearchValue }) {
  const { filter } = useContext(StoreContext)
  const [products, setProducts] = useState([])
  const { data, loading, errors } = useFetch(filter)

  useEffect(() => {
    data && setProducts(data)
  }, [data])

  // Search functionality
  let filteredProducts = products
  if (inputSearchValue && inputSearchValue.length >= 1) {
    filteredProducts = products.filter((product) => {
      return (
        product.attributes.Title.toLowerCase().includes(inputSearchValue) ||
        product.attributes.Desc.toLowerCase().includes(inputSearchValue)
      )
    })
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </div>
    )
  }

  if (errors) {
    return (
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
        <h3 className="text-2xl font-bold text-red-800 mb-4">Error Loading Products</h3>
        <p className="text-red-600">Unable to load products. Please try again later.</p>
      </div>
    )
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-violet-100 p-12 text-center">
        <div className="w-24 h-24 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h3>
        <p className="text-gray-600 mb-6">
          {inputSearchValue
            ? `No products match your search for "${inputSearchValue}"`
            : "No products match your current filters"}
        </p>
      </div>
    )
  }

  return (
    <>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="bg-white rounded-2xl shadow-xl border border-violet-100 p-8">
        <div className="flex items-center justify-center space-x-2">
          <button className="flex items-center justify-center w-10 h-10 rounded-xl border-2 border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`flex items-center justify-center w-10 h-10 rounded-xl font-semibold transition-all duration-200 ${
                page === 1
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg"
                  : "border-2 border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300"
              }`}
            >
              {page}
            </button>
          ))}

          <span className="px-3 text-violet-400">...</span>

          <button className="flex items-center justify-center w-10 h-10 rounded-xl border-2 border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductsList
