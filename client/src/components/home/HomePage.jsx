"use client"
import Categories from "../categories/Categories"
import HeroSection from "./HeroSection"
import Navbar from "../navbar/Navbar"
import Footer from "../staticPages/Footer"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import NewArrival from "../NewArrival"
import { FaHeadset, FaTruckMoving, FaHandHoldingUsd } from "react-icons/fa"
import ads from "../../assets/offer.png"
import Recomanded from "../Recomanded"

function HomePage() {
  useEffect(() => {
    document.title = "SabDecor | Home"
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const category = "" // declaration variable

  return (
    <>
      <Navbar />
      <HeroSection />

      {/* features */}
      <div className="container mx-auto py-8">
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto justify-center relative -mt-16">
          <div className="shadow-md cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 bg-white rounded-xl px-3 py-6 flex justify-center items-center gap-6">
            <FaTruckMoving className="w-10 h-10 text-violet-700 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Order over $200</p>
            </div>
          </div>
          <div className="shadow-md cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 bg-white rounded-xl px-3 py-6 flex justify-center items-center gap-6">
            <FaHandHoldingUsd className="w-10 h-10 text-violet-700 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">Money Returns</h4>
              <p className="text-gray-500 text-sm">30 days money returns</p>
            </div>
          </div>
          <div className="shadow-md cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 bg-white rounded-xl px-3 py-6 flex justify-center items-center gap-6">
            <FaHeadset className="w-10 h-10 text-violet-700 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>
      {/* /features */}

      <Categories category={category} />
      <NewArrival />

      {/* ads */}
      <div className="container pb-16 mx-auto">
        <Link to="/products">
          <img src={ads || "/placeholder.svg"} alt="ads" className="w-full border border-violet-700 rounded-md" />
        </Link>
      </div>
      {/* /ads */}

      <Recomanded />

      {/* Modern Testimonial/CTA Section */}
      <section className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 items-center">
              {/* Content */}
              <div className="p-8 lg:p-16 text-white">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full mx-4"></div>
                  <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                </div>

                <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                  Latest Premium
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Collection
                  </span>
                </h2>

                <p className="text-violet-100 text-lg mb-8 leading-relaxed max-w-md">
                  Discover our newest arrivals featuring premium quality furniture that combines modern design with
                  exceptional comfort and durability.
                </p>

                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 bg-white text-violet-700 font-semibold rounded-2xl hover:bg-violet-50 transform hover:scale-105 transition-all duration-200 shadow-lg group"
                >
                  <span>Explore Collection</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Visual Element */}
              <div className="relative h-64 lg:h-full min-h-[400px] bg-gradient-to-br from-violet-500 to-purple-700">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 transform rotate-12">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center"
                      >
                        <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                          />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21l4-4 4 4" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-8 right-8 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-violet-800 font-bold text-sm">NEW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full mx-4"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their spaces with our premium furniture
              collection.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "$4.8M",
                label: "Total Sales",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                gradient: "from-green-400 to-emerald-500",
              },
              {
                number: "50K+",
                label: "Happy Customers",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                gradient: "from-violet-400 to-purple-500",
              },
              {
                number: "1,200+",
                label: "Products Sold",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                gradient: "from-blue-400 to-indigo-500",
              },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 p-8 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
                    </svg>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Why Choose SabDecor?</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { title: "Premium Quality", desc: "Handcrafted with finest materials" },
                  { title: "Fast Delivery", desc: "Free shipping on orders over $200" },
                  { title: "Expert Support", desc: "24/7 customer assistance" },
                  { title: "Satisfaction Guaranteed", desc: "30-day money back guarantee" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-semibold text-violet-700 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default HomePage
