"use client"

import { useState, useEffect } from "react"
import Navbar from "../navbar/Navbar"
import Footer from "../staticPages/Footer"
import { Link } from "react-router-dom"

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal")
  const [isEditing, setIsEditing] = useState({})
  const [formData, setFormData] = useState({
    firstName: "Youssef",
    lastName: "Sabir",
    email: "ysf.sabir@example.com",
    phone: "+212647804243",
    dateOfBirth: "2000-07-12",
    address: "123 Main Street",
    city: "Safi",
    state: "NY",
    zipCode: "10001",
    country: "Morocco",
  })

  useEffect(() => {
    document.title = "SabDecor | My Profile"
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleEdit = (section) => {
    setIsEditing((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const saveChanges = (section) => {
    // Here you would typically save to backend
    setIsEditing((prev) => ({ ...prev, [section]: false }))
    // Show success message
  }

  // Mock data for orders and payments
  const orderHistory = [
    {
      id: "ORD-12345",
      date: "2024-01-15",
      status: "Delivered",
      total: 299.99,
      items: 3,
    },
    {
      id: "ORD-12344",
      date: "2024-01-10",
      status: "Shipped",
      total: 159.99,
      items: 2,
    },
    {
      id: "ORD-12343",
      date: "2024-01-05",
      status: "Processing",
      total: 89.99,
      items: 1,
    },
  ]

  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "12/26",
      isDefault: true,
    },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiry: "09/25",
      isDefault: false,
    },
  ]

  const tabs = [
    {
      id: "personal",
      name: "Personal Info",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      id: "address",
      name: "Address",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: "security",
      name: "Security",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      id: "payments",
      name: "Payment Methods",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      id: "orders",
      name: "Order History",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-violet-100 pt-20">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="sm:text-lg md:text-3xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent mb-2">
                  My Account
                </h1>
                <p className="text-gray-600">Manage your account settings and preferences</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {formData.firstName[0]}
                  {formData.lastName[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {formData.firstName} {formData.lastName}
                  </p>
                  <p className="text-sm text-gray-600">{formData.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden sticky top-6">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                  <h3 className="text-lg font-bold text-white">Account Settings</h3>
                </div>
                <nav className="p-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 font-semibold"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Personal Information */}
              {activeTab === "personal" && (
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-white flex items-center">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        Personal Information
                      </h2>
                      <button
                        onClick={() => toggleEdit("personal")}
                        className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        {isEditing.personal ? "Cancel" : "Edit"}
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                        {isEditing.personal ? (
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className="w-full px-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                          />
                        ) : (
                          <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.firstName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                        {isEditing.personal ? (
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className="w-full px-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                          />
                        ) : (
                          <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.lastName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        {isEditing.personal ? (
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full px-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                          />
                        ) : (
                          <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        {isEditing.personal ? (
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="w-full px-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                          />
                        ) : (
                          <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.phone}</p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                        {isEditing.personal ? (
                          <input
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                            className="w-full px-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                          />
                        ) : (
                          <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">
                            {new Date(formData.dateOfBirth).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>

                    {isEditing.personal && (
                      <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                        <button
                          onClick={() => toggleEdit("personal")}
                          className="px-6 py-3 border-2 border-violet-200 text-violet-700 rounded-xl hover:bg-violet-50 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => saveChanges("personal")}
                          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all"
                        >
                          Save Changes
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Address Information */}
              {activeTab === "address" && (
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-white flex items-center">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Address Information
                      </h2>
                      <button
                        onClick={() => toggleEdit("address")}
                        className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        {isEditing.address ? "Cancel" : "Edit"}
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address</label>
                        {isEditing.address ? (
                          <input
                            type="text"
                            value={formData.address}
                            onChange={(e) => handleInputChange("address", e.target.value)}
                            className="w-full px-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                          />
                        ) : (
                          <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.address}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                        {isEditing.address ? (
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            className="w-full px-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                          />
                        ) : (
                          <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.city}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                        {isEditing.address ? (
                          <input
                            type="text"
                            value={formData.state}
                            onChange={(e) => handleInputChange("state", e.target.value)}
                            className="w-full px-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                          />
                        ) : (
                          <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.state}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code</label>
                        {isEditing.address ? (
                          <input
                            type="text"
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange("zipCode", e.target.value)}
                            className="w-full px-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                          />
                        ) : (
                          <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.zipCode}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                        {isEditing.address ? (
                          <select
                            value={formData.country}
                            onChange={(e) => handleInputChange("country", e.target.value)}
                            className="w-full px-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                          >
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                          </select>
                        ) : (
                          <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.country}</p>
                        )}
                      </div>
                    </div>

                    {isEditing.address && (
                      <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                        <button
                          onClick={() => toggleEdit("address")}
                          className="px-6 py-3 border-2 border-violet-200 text-violet-700 rounded-xl hover:bg-violet-50 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => saveChanges("address")}
                          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all"
                        >
                          Save Changes
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === "security" && (
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                    <h2 className="text-xl font-bold text-white flex items-center">
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      Security Settings
                    </h2>
                  </div>

                  <div className="p-6 space-y-6">
                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl border border-violet-100">
                      <h3 className="font-bold text-gray-900 mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password</label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                            placeholder="Enter current password"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                            placeholder="Enter new password"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password</label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 border-2 border-violet-200 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
                            placeholder="Confirm new password"
                          />
                        </div>
                        <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all">
                          Update Password
                        </button>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                      <h3 className="font-bold text-gray-900 mb-4">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-700">Add an extra layer of security to your account</p>
                          <p className="text-sm text-gray-600 mt-1">Status: Not enabled</p>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-colors">
                          Enable 2FA
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Methods */}
              {activeTab === "payments" && (
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-white flex items-center">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          />
                        </svg>
                        Payment Methods
                      </h2>
                      <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors">
                        Add New Card
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-violet-50 rounded-xl border border-violet-100"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-8 bg-gradient-to-r from-violet-600 to-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
                            {method.type === "Visa" ? "VISA" : "MC"}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {method.type} ending in {method.last4}
                            </p>
                            <p className="text-sm text-gray-600">Expires {method.expiry}</p>
                            {method.isDefault && (
                              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-1">
                                Default
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {!method.isDefault && (
                            <button className="text-violet-600 hover:text-violet-700 text-sm font-medium">
                              Set as Default
                            </button>
                          )}
                          <button className="text-red-600 hover:text-red-700 text-sm font-medium">Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Order History */}
              {activeTab === "orders" && (
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                    <h2 className="text-xl font-bold text-white flex items-center">
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      Order History
                    </h2>
                  </div>

                  <div className="p-6 space-y-4">
                    {orderHistory.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-violet-50 rounded-xl border border-violet-100 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{order.id}</p>
                            <p className="text-sm text-gray-600">{order.date}</p>
                            <p className="text-sm text-gray-600">{order.items} items</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-violet-700">${order.total}</p>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Shipped"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <Link
                          to={`/order/${order.id}`}
                          className="text-violet-600 hover:text-violet-700 font-medium text-sm"
                        >
                          View Details
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile
