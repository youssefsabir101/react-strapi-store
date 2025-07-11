"use client"

import { Link } from "react-router-dom"
import Navbar from "../navbar/Navbar"
import { useEffect } from "react"

const PageNotFound = (props) => {
  useEffect(() => {
    document.title = "SabDecor | Not Found"
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 5a2 2 0 012-2h4a2 2 0 012 2v3H8V5z"
          />
        </svg>
      ),
      title: "Browse Products",
      description: "Explore our furniture collection",
      link: "/products",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      title: "Go Home",
      description: "Return to our homepage",
      link: "/",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Get Help",
      description: "Contact our support team",
      link: "/contact",
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-violet-100 pt-20">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">
                Oops! Something went wrong
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="max-w-4xl w-full">
              {/* Main Error Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
                      {props.ErrorMessage?.includes("404") ? "404" : "Error!"}
                    </h2>
                    <h3 className="text-2xl font-semibold text-white mb-4">{props.ErrorMessage || "Page Not Found"}</h3>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
                      The {props.name || "page"} you are looking for might have been removed, had its name changed, or
                      is temporarily unavailable.
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-center mb-8">
                    <Link
                      to={props.GoBackUrl || "/"}
                      className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      Go Back
                    </Link>
                  </div>

                  {/* Quick Actions */}
                  <div className="border-t border-violet-100 pt-8">
                    <h4 className="text-lg font-semibold text-gray-900 text-center mb-6">
                      Or try one of these options:
                    </h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      {features.map((feature, index) => (
                        <Link
                          key={index}
                          to={feature.link}
                          className="block p-6 bg-gradient-to-r from-gray-50 to-violet-50 rounded-xl border border-violet-100 hover:shadow-lg hover:from-violet-50 hover:to-purple-50 transition-all duration-300 group"
                        >
                          <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                              {feature.icon}
                            </div>
                            <h5 className="font-semibold text-gray-900 mb-2">{feature.title}</h5>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Help Section */}
              <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6">
                  <h3 className="text-xl font-bold text-white text-center flex items-center justify-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
                      />
                    </svg>
                    Need More Help?
                  </h3>
                </div>

                <div className="p-6">
                  <div className="text-center">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      If you're still having trouble finding what you're looking for, our customer support team is here
                      to help you.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-xl border border-violet-100 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
                        <p className="text-sm text-gray-600">ysf.sabir@sabdecor.com</p>
                      </div>

                      <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-xl border border-violet-100 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
                        <p className="text-sm text-gray-600">+2120047804243</p>
                      </div>

                      <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-xl border border-violet-100 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">Live Chat</h4>
                        <p className="text-sm text-gray-600">Available 24/7</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link
                        to="/contact"
                        className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                      >
                        Contact Support
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageNotFound

