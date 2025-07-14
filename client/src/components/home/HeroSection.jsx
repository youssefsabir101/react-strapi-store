"use client"

import { Link } from "react-router-dom"

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat hero-section-bg-img min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 sm:bg-gradient-to-r sm:from-black/70 sm:to-black/25"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative py-32 sm:px-6 lg:flex lg:h-screen lg:items-center">
        <div className="text-center sm:text-left lg:pl-20 max-sm:mx-4">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-violet-600/90 backdrop-blur-sm rounded-full border border-violet-400/30 mb-6">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-white">Premium Furniture Collection</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold sm:text-6xl lg:text-7xl text-white leading-tight">
            Transform Your Home with{" "}
            <strong className="block font-extrabold bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              Premium Furniture
            </strong>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg sm:text-xl text-gray-200 leading-relaxed">
            Discover our curated collection of modern, comfortable, and stylish furniture pieces that bring elegance and
            functionality to every room in your home.
          </p>

          {/* Features List */}
          <div className="mt-6 flex flex-wrap gap-4 text-white">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">30-Day Returns</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="/products"
              className="group block w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-xl focus:outline-none focus:ring-4 focus:ring-violet-300 sm:w-auto hover:scale-105 hover:from-violet-700 hover:to-purple-700 transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                Shop Furniture
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link
              to="/about"
              className="group block w-full rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 sm:w-auto hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center justify-center sm:justify-start space-x-8">
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-violet-200 text-sm">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-white">1,200+</div>
              <div className="text-violet-200 text-sm">Furniture Pieces</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-white">4.9★</div>
              <div className="text-violet-200 text-sm">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Floating Product Cards */}
        <div className="hidden lg:block absolute right-10 top-1/2 transform -translate-y-1/2 space-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-2xl animate-float">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Modern Sofa</div>
                <div className="text-violet-200 text-xs">Starting at $899</div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-2xl animate-float delay-500">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Dining Table</div>
                <div className="text-violet-200 text-xs">Starting at $1,299</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce pb-14">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-violet-200">Explore Our Collection</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
