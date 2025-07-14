"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaShoppingCart, FaUserAlt, FaHeart, FaSearch } from "react-icons/fa"
import { useSelector } from "react-redux"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Get cart items from Redux store
  const products = useSelector((state) => state.cart.products)

  const navLinks = [
    { to: "/", label: "Home", ariaLabel: "Home Page" },
    { to: "/products", label: "Shop", ariaLabel: "Our products" },
    { to: "/about", label: "About", ariaLabel: "About us" },
    { to: "/contactus", label: "Contact", ariaLabel: "Contact us" },
    { to: "/faq", label: "FAQ", ariaLabel: "FAQ" },
  ]

  return (
    <>
      <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-violet-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group" aria-label="SabDecor Home">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21l4-4 4 4" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">
                SabDecor
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-label={link.ariaLabel}
                  className="relative font-medium text-gray-700 hover:text-violet-700 transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-violet-700 hover:bg-violet-50 rounded-xl transition-all duration-300"
                aria-label="Search"
              >
                <FaSearch className="w-5 h-5" />
              </button>

              {/* Cart */}
              <Link
                to="/cart"
                className="p-2 text-gray-600 hover:text-violet-700 hover:bg-violet-50 rounded-xl transition-all duration-300 relative"
                aria-label="Shopping Cart"
              >
                <FaShoppingCart className="w-5 h-5" />
                {products.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                    {products.length}
                  </span>
                )}
              </Link>

              {/* Account */}
              <Link
                to="/account"
                className="p-2 text-gray-600 hover:text-violet-700 hover:bg-violet-50 rounded-xl transition-all duration-300"
                aria-label="Account"
              >
                <FaUserAlt className="w-5 h-5" />
              </Link>

              {/* CTA Button */}
              <Link
                to="/products"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Shop Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-violet-700 hover:bg-violet-50 rounded-xl transition-all duration-300"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Search Bar (Desktop) */}
          {isSearchOpen && (
            <div className="hidden md:block py-4 border-t border-violet-100">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search furniture..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                />
                <FaSearch className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-violet-100 shadow-lg">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search furniture..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                />
                <FaSearch className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 text-gray-700 hover:text-violet-700 hover:bg-violet-50 rounded-xl font-medium transition-all duration-300"
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-violet-100">
                <Link
                  to="/wishlist"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-violet-50 text-violet-700 rounded-xl font-medium hover:bg-violet-100 transition-all duration-300"
                >
                  <FaHeart className="w-4 h-4" />
                  <span>Wishlist</span>
                </Link>

                <Link
                  to="/cart"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-violet-50 text-violet-700 rounded-xl font-medium hover:bg-violet-100 transition-all duration-300 relative"
                >
                  <FaShoppingCart className="w-4 h-4" />
                  <span>Cart</span>
                  {products.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {products.length}
                    </span>
                  )}
                </Link>

                <Link
                  to="/account"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-violet-50 text-violet-700 rounded-xl font-medium hover:bg-violet-100 transition-all duration-300"
                >
                  <FaUserAlt className="w-4 h-4" />
                  <span>Account</span>
                </Link>

                <Link
                  to="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300"
                >
                  <span>Shop Now</span>
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-violet-100 text-center">
                <p className="text-sm text-gray-600 mb-2">Need help? Contact us</p>
                <div className="flex justify-center space-x-4">
                  <a href="tel:+1234567890" className="text-violet-600 hover:text-violet-700 font-medium text-sm">
                    📞 Call Us
                  </a>
                  <a
                    href="mailto:support@sabdecor.com"
                    className="text-violet-600 hover:text-violet-700 font-medium text-sm"
                  >
                    ✉️ Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </>
  )
}

export default Navbar
