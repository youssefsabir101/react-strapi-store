import React from 'react'
import Navbar from '../navbar/Navbar';"use client"

import { useState } from "react"
import {
  CreditCard,
  Truck,
  Shield,
  MapPin,
  User,
  Mail,
  Phone,
  Lock,
  CheckCircle,
  ArrowLeft,
  Package,
  Star,
  Minus,
  Plus,
} from "lucide-react"

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    paymentMethod: "card",
    cardNumber: "",
    expiry: "",
    cvv: "",
    shippingMethod: "standard",
    agreeTerms: false,
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [errors, setErrors] = useState({})

  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Modern Ceramic Vase",
      price: 89.99,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
      color: "White",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Decorative Wall Mirror",
      price: 149.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
      color: "Gold",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Luxury Throw Pillow",
      price: 45.99,
      quantity: 3,
      image: "/placeholder.svg?height=80&width=80",
      color: "Navy Blue",
      rating: 4.7,
    },
  ])

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shippingCost = formData.shippingMethod === "express" ? 25.0 : 15.0
  const tax = subtotal * 0.08
  const discount = subtotal > 200 ? -20 : 0
  const total = subtotal + shippingCost + tax + discount

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const validateStep = (step) => {
    const newErrors = {}

    if (step === 1) {
      if (!formData.email) newErrors.email = "Email is required"
      if (!formData.firstName) newErrors.firstName = "First name is required"
      if (!formData.lastName) newErrors.lastName = "Last name is required"
      if (!formData.phone) newErrors.phone = "Phone number is required"
    }

    if (step === 2) {
      if (!formData.address) newErrors.address = "Address is required"
      if (!formData.city) newErrors.city = "City is required"
      if (!formData.zipCode) newErrors.zipCode = "ZIP code is required"
    }

    if (step === 3) {
      if (!formData.cardNumber) newErrors.cardNumber = "Card number is required"
      if (!formData.expiry) newErrors.expiry = "Expiry date is required"
      if (!formData.cvv) newErrors.cvv = "CVV is required"
      if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateStep(3)) return

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setOrderComplete(true)
    }, 3000)
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform animate-pulse">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Thank you for your purchase! Your order <span className="font-semibold text-violet-700">#ORD-12345</span>{" "}
            has been confirmed and will be shipped within 24 hours.
          </p>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200">
              Track Your Order
            </button>
            <button className="w-full border-2 border-violet-200 text-violet-700 py-3 rounded-xl font-semibold hover:bg-violet-50 transition-all duration-200">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <Navbar />
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-violet-100 sticky top-10  z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-violet-700 hover:text-violet-800 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-medium">Back to Cart</span>
              </button>
              <div className="h-6 w-px bg-violet-200"></div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">
                Secure Checkout
              </h1>
            </div>
            <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-full">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">SSL Protected</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
        <div className="flex items-center justify-center space-x-8 mb-12">
          {[
            { step: 1, title: "Information", icon: User },
            { step: 2, title: "Shipping", icon: Truck },
            { step: 3, title: "Payment", icon: CreditCard },
          ].map(({ step, title, icon: Icon }, index) => (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep >= step
                      ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg transform scale-110"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {currentStep > step ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                </div>
                <span
                  className={`mt-2 text-sm font-medium ${currentStep >= step ? "text-violet-700" : "text-gray-500"}`}
                >
                  {title}
                </span>
              </div>
              {index < 2 && (
                <div
                  className={`w-16 h-1 mx-4 rounded-full transition-all duration-300 ${
                    currentStep > step + 1 ? "bg-gradient-to-r from-violet-600 to-purple-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                    <h2 className="text-xl font-bold text-white flex items-center">
                      <User className="w-6 h-6 mr-3" />
                      Contact Information
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all ${
                            errors.email ? "border-red-300" : "border-gray-200"
                          }`}
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          placeholder="John"
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all ${
                            errors.firstName ? "border-red-300" : "border-gray-200"
                          }`}
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          placeholder="Doe"
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all ${
                            errors.lastName ? "border-red-300" : "border-gray-200"
                          }`}
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all ${
                            errors.phone ? "border-red-300" : "border-gray-200"
                          }`}
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Shipping Address */}
              {currentStep === 2 && (
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                    <h2 className="text-xl font-bold text-white flex items-center">
                      <MapPin className="w-6 h-6 mr-3" />
                      Shipping Address
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address</label>
                      <input
                        type="text"
                        placeholder="123 Main Street"
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all ${
                          errors.address ? "border-red-300" : "border-gray-200"
                        }`}
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                        <input
                          type="text"
                          placeholder="New York"
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all ${
                            errors.city ? "border-red-300" : "border-gray-200"
                          }`}
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code</label>
                        <input
                          type="text"
                          placeholder="10001"
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all ${
                            errors.zipCode ? "border-red-300" : "border-gray-200"
                          }`}
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        />
                        {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl border border-violet-100">
                      <h4 className="font-bold text-violet-700 mb-4 flex items-center">
                        <Truck className="w-5 h-5 mr-2" />
                        Shipping Options
                      </h4>
                      <div className="space-y-3">
                        <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-violet-300 transition-all">
                          <input
                            type="radio"
                            name="shipping"
                            value="standard"
                            checked={formData.shippingMethod === "standard"}
                            onChange={(e) => handleInputChange("shippingMethod", e.target.value)}
                            className="text-violet-600 focus:ring-violet-500"
                          />
                          <div className="ml-3 flex-1">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-semibold text-gray-900">Standard Shipping</p>
                                <p className="text-sm text-gray-600">5-7 business days</p>
                              </div>
                              <span className="font-bold text-violet-700">$15.00</span>
                            </div>
                          </div>
                        </label>
                        <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-violet-300 transition-all">
                          <input
                            type="radio"
                            name="shipping"
                            value="express"
                            checked={formData.shippingMethod === "express"}
                            onChange={(e) => handleInputChange("shippingMethod", e.target.value)}
                            className="text-violet-600 focus:ring-violet-500"
                          />
                          <div className="ml-3 flex-1">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-semibold text-gray-900">Express Shipping</p>
                                <p className="text-sm text-gray-600">2-3 business days</p>
                              </div>
                              <span className="font-bold text-violet-700">$25.00</span>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                    <h2 className="text-xl font-bold text-white flex items-center">
                      <CreditCard className="w-6 h-6 mr-3" />
                      Payment Information
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all ${
                            errors.cardNumber ? "border-red-300" : "border-gray-200"
                          }`}
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                        />
                        {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all ${
                            errors.expiry ? "border-red-300" : "border-gray-200"
                          }`}
                          value={formData.expiry}
                          onChange={(e) => handleInputChange("expiry", e.target.value)}
                        />
                        {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            placeholder="123"
                            className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all ${
                              errors.cvv ? "border-red-300" : "border-gray-200"
                            }`}
                            value={formData.cvv}
                            onChange={(e) => handleInputChange("cvv", e.target.value)}
                          />
                          {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={formData.agreeTerms}
                        onChange={(e) => handleInputChange("agreeTerms", e.target.checked)}
                        className="mt-1 text-violet-600 focus:ring-violet-500 rounded"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                        I agree to the{" "}
                        <span className="text-violet-700 underline cursor-pointer hover:text-violet-800">
                          Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="text-violet-700 underline cursor-pointer hover:text-violet-800">
                          Privacy Policy
                        </span>
                      </label>
                    </div>
                    {errors.agreeTerms && <p className="text-red-500 text-sm">{errors.agreeTerms}</p>}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    currentStep === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white border-2 border-violet-200 text-violet-700 hover:bg-violet-50 hover:border-violet-300"
                  }`}
                >
                  Previous
                </button>

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-w-[140px]"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </div>
                    ) : (
                      "Complete Order"
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl border border-violet-100 sticky top-24 overflow-hidden">
              <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Package className="w-6 h-6 mr-3" />
                  Order Summary
                </h3>
              </div>

              <div className="p-6 space-y-6">
                {/* Cart Items */}
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl">
                      <div className="relative">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-16 h-16 rounded-lg object-cover border-2 border-white shadow-sm"
                        />
                        <div className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                          {item.quantity}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 truncate">{item.title}</h4>
                        <p className="text-sm text-gray-600">Color: {item.color}</p>
                        <div className="flex items-center mt-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(item.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 ml-1">({item.rating})</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center hover:bg-violet-200 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-semibold text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center hover:bg-violet-200 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-bold text-violet-700">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">${shippingCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>
                    {discount < 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-green-600">Discount</span>
                        <span className="font-semibold text-green-600">${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-violet-700">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm font-semibold text-green-800">Secure Payment</p>
                      <p className="text-xs text-green-600">
                        Your information is protected with 256-bit SSL encryption
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
