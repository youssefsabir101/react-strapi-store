"use client"

import { useState, useEffect } from "react"
import Navbar from "../navbar/Navbar"
import Footer from "../staticPages/Footer"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { removeFromCart, resetCart } from "../redux/cartReducer"
import ConfirmationModal from "./ConfirmationModal"

function Cart() {
  useEffect(() => {
    document.title = "SabDecor | Cart"
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const products = useSelector((state) => state.cart.products)
  const quantities = useSelector((state) => state.cart.quantities)
  const dispatch = useDispatch()

  // Remove the complex updateQuantity function and replace with:
  const [localQuantities, setLocalQuantities] = useState({})

  // Use local state combined with Redux
  const getQuantity = (productId) => {
    return localQuantities[productId] || quantities[productId] || 1
  }

  const incrementQuantity = (productId) => {
    const currentQuantity = getQuantity(productId)
    setLocalQuantities((prev) => ({
      ...prev,
      [productId]: currentQuantity + 1,
    }))
  }

  const decrementQuantity = (productId) => {
    const currentQuantity = getQuantity(productId)
    if (currentQuantity > 1) {
      setLocalQuantities((prev) => ({
        ...prev,
        [productId]: currentQuantity - 1,
      }))
    }
  }

  // Update the subtotal calculation to use local quantities
  const subtotals = products.map((product) => {
    const quantity = getQuantity(product.id)
    return product.price * quantity
  })

  const subtotal = subtotals.reduce((acc, subtotal) => acc + subtotal, 0)
  const VAT = 0
  const discount = -0
  const totalPrice = subtotal + VAT + discount

  const [showModal, setShowModal] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState(null)

  const handleRemoveClick = (productId) => {
    setSelectedProductId(productId)
    setShowModal(true)
  }

  const handleConfirmRemove = () => {
    dispatch(removeFromCart({ id: selectedProductId }))
    setShowModal(false)
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-violet-100">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent mb-2">
                Shopping Cart
              </h1>
              <p className="text-gray-600">
                {products.length > 0
                  ? `${products.length} item${products.length > 1 ? "s" : ""} in your cart`
                  : "Your cart is empty"}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              {products.length > 0 ? (
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                    <h2 className="text-xl font-bold text-white flex items-center">
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
                        />
                      </svg>
                      Cart Items ({products.length})
                    </h2>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-violet-50 rounded-xl border border-violet-100 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="relative">
                            <img
                              src={import.meta.env.VITE_API_URL + product.image || "/placeholder.svg"}
                              alt={product.title}
                              className="w-20 h-20 rounded-xl object-cover border-2 border-white shadow-md"
                            />
                            <div className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                              {getQuantity(product.id)}
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-lg text-gray-900 truncate mb-1">{product.title}</h4>
                            <p className="text-sm text-gray-600 mb-1">Color: Gray</p>
                            <p className="text-sm text-gray-500 line-clamp-2 mb-2" title={product.desc}>
                              {product.desc}
                            </p>

                            {/* Star Rating */}
                            <div className="flex items-center mb-3">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-3 h-3 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-xs text-gray-500 ml-1">(4.8)</span>
                            </div>

                            {/* Price and Quantity Controls */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <span className="text-sm font-semibold text-gray-700">Qty:</span>
                                <div className="flex items-center space-x-2">
                                  <button
                                    onClick={() => decrementQuantity(product.id)}
                                    className="w-7 h-7 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center hover:bg-violet-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={getQuantity(product.id) <= 1}
                                  >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                    </svg>
                                  </button>
                                  <span className="font-bold text-sm min-w-[1.5rem] text-center text-violet-700">
                                    {getQuantity(product.id)}
                                  </span>
                                  <button
                                    onClick={() => incrementQuantity(product.id)}
                                    className="w-7 h-7 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center hover:bg-violet-200 transition-colors"
                                  >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>

                              <div className="text-right">
                                <div className="text-sm text-gray-500">Unit: ${product.price}</div>
                                <div className="text-lg font-bold text-violet-700">
                                  ${(product.price * getQuantity(product.id)).toFixed(2)}
                                </div>
                              </div>

                              <button
                                onClick={() => handleRemoveClick(product.id)}
                                className="ml-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                  <div className="p-12 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-violet-600 mb-4">Your Cart Is Empty!</h2>
                    <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
                    <Link
                      to="/products"
                      className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      Start Shopping
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Cart Summary Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl border border-violet-100 sticky top-6 overflow-hidden">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    Cart Totals
                  </h3>
                </div>

                <div className="p-6 space-y-6">
                  {/* Price Breakdown */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Subtotal</span>
                      <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">VAT</span>
                      <span className="font-bold text-gray-900">${VAT.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-green-600 font-medium">Discount</span>
                      <span className="font-bold text-green-600">${discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl px-4">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-xl font-bold text-violet-700">${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {products.length > 0 ? (
                      <>
                        <button
                          onClick={() => dispatch(resetCart())}
                          className="w-full bg-white border-2 border-violet-200 text-violet-700 py-3 rounded-xl font-semibold hover:bg-violet-50 hover:border-violet-300 transition-all duration-200"
                        >
                          Reset Cart
                        </button>
                        <Link
                          to="/checkout"
                          className="w-full block text-center bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                          Proceed to Checkout
                        </Link>
                      </>
                    ) : (
                      <>
                        <button className="w-full bg-gray-100 text-gray-400 py-3 rounded-xl font-semibold cursor-not-allowed">
                          Reset Cart
                        </button>
                        <button className="w-full bg-gray-100 text-gray-400 py-3 rounded-xl font-semibold cursor-not-allowed">
                          Proceed to Checkout
                        </button>
                      </>
                    )}
                  </div>

                  {/* Security Badge */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-green-800">Secure Shopping</p>
                        <p className="text-xs text-green-600">Your cart is protected with SSL encryption</p>
                      </div>
                    </div>
                  </div>

                  {/* Continue Shopping Link */}
                  <div className="text-center pt-4 border-t border-gray-100">
                    <Link
                      to="/products"
                      className="text-violet-700 hover:text-violet-800 font-medium text-sm underline transition-colors"
                    >
                      ← Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <ConfirmationModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmRemove}
        message="Are you sure you want to remove this item from your cart?"
      />
    </>
  )
}

export default Cart
