"use client"

import { useState, useEffect, useContext } from "react"
import useFetch from "../../hooks/useFetch"
import StoreContext from "../../hooks/storeContext"
import { Link } from "react-router-dom"

function Categories({ category }) {
  // Get data from API
  const [categories, setCategories] = useState([])
  const { data, loading } = useFetch("/api/categories?populate=*")

  useEffect(() => {
    data && setCategories(data)
  }, [data])

  // Use Store
  const { setFilter } = useContext(StoreContext)

  const handleFilterCategory = (e) => {
    setFilter("http://localhost:1337/api/products?populate=*&filters[categories][id][$eq]=" + e.target.dataset.category)
  }

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="text-center mb-12">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-gray-200 rounded-2xl h-64"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full mx-4"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated furniture collections, designed to bring style and comfort to every room in
            your home.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl border border-violet-100 hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              {/* Background Image */}
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <img
                  src={
                    import.meta.env.VITE_API_URL + category.attributes.image.data.attributes.url || "/placeholder.svg"
                  }
                  alt={category.attributes.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500"></div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  New Collection
                </div>
              </div>

              {/* Content Overlay */}
              <Link
                to="products"
                onClick={handleFilterCategory}
                data-category={category.id}
                className="absolute inset-0 flex flex-col justify-end p-6 text-white group-hover:bg-black/10 transition-all duration-500"
              >
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-violet-300 transition-colors duration-300">
                    {category.attributes.title}
                  </h3>

                  <p className="text-violet-100 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    Explore our premium {category.attributes.title.toLowerCase()} collection
                  </p>

                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <span className="text-sm font-medium">Shop Now</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-violet-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl border border-violet-100 p-8 max-w-md mx-auto">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Can't Find What You're Looking For?</h3>
              <p className="text-gray-600">Browse our complete furniture collection with over 1,200+ premium pieces.</p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
