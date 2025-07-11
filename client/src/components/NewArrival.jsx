"use client"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import useFetch from "../hooks/useFetch"
import StoreContext from "../hooks/storeContext"
import ProductCard from "./ProductCard"

function NewArrival() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet2: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet1: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  const { filter } = useContext(StoreContext)

  // Get products from API
  const [products, setProducts] = useState([])
  const { data, loading, errors } = useFetch(filter)

  useEffect(() => {
    data && setProducts(data)
  }, [data])

  // Filter featured products
  const featuredProducts = products.filter((product) => product.attributes.isFeatured)

  // Custom arrow components
  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl border border-violet-100 flex items-center justify-center hover:bg-violet-50 hover:border-violet-300 transition-all duration-200 group"
      aria-label="Previous products"
    >
      <svg
        className="w-6 h-6 text-violet-600 group-hover:text-violet-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  )

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl border border-violet-100 flex items-center justify-center hover:bg-violet-50 hover:border-violet-300 transition-all duration-200 group"
      aria-label="Next products"
    >
      <svg
        className="w-6 h-6 text-violet-600 group-hover:text-violet-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  )

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="text-center mb-12">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
            <div className="flex space-x-6 overflow-hidden">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex-shrink-0 w-80">
                  <div className="bg-gray-200 rounded-2xl h-96"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (errors) {
    return (
      <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-violet-100 p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading New Arrivals</h3>
            <p className="text-red-600">Unable to load new arrival products. Please try again later.</p>
          </div>
        </div>
      </div>
    )
  }

  if (featuredProducts.length === 0) {
    return (
      <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-violet-100 p-12 text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">New Arrivals Coming Soon!</h3>
            <p className="text-gray-600 mb-6">
              We're preparing exciting new products for you. Check back soon for the latest arrivals!
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Browse Current Collection
            </Link>
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
            <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full mx-4"></div>
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              NEW
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full mx-4"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent mb-4">
            Top New Arrivals
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our latest collection of premium furniture pieces, fresh from our designers and ready to transform
            your space.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl border border-violet-100 p-6 overflow-hidden">
            <Carousel
              responsive={responsive}
              additionalTransfrom={0}
              arrows={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              centerMode={false}
              className="py-4"
              containerClass="carousel-container"
              dotListClass="custom-dot-list"
              draggable={true}
              focusOnSelect={false}
              infinite={true}
              itemClass="px-3"
              keyBoardControl={true}
              minimumTouchDrag={80}
              pauseOnHover={true}
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={true}
              showDots={true}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              {featuredProducts.map((product) => (
                <div key={product.id} className="h-full">
                  <ProductCard product={product} className="h-full" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-xl border border-violet-100 p-8 max-w-md mx-auto">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Don't Miss Out!</h3>
              <p className="text-gray-600">Be the first to discover all our new arrivals and exclusive collections.</p>
            </div>
            <Link
              to="/products?filter=new"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              View All New Arrivals
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Carousel Styles */}
      <style jsx global>{`
        .carousel-container .react-multi-carousel-dot-list {
          position: static;
          margin-top: 2rem;
        }

        .carousel-container .react-multi-carousel-dot button {
          width: 12px;
          height: 12px;
          border: none;
          background: #e5e7eb;
          border-radius: 50%;
          margin: 0 4px;
          transition: all 0.3s ease;
        }

        .carousel-container .react-multi-carousel-dot--active button {
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          transform: scale(1.2);
        }

        .carousel-container .react-multi-carousel-track {
          padding: 1rem 0;
        }

        .carousel-container .react-multi-carousel-item {
          display: flex;
          align-items: stretch;
        }
      `}</style>
    </div>
  )
}

export default NewArrival
