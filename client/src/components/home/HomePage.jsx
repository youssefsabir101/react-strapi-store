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
import ads1 from "../../assets/background3.png"
import Recomanded from "../Recomanded"

import { Star, Award, HeartHandshake } from "lucide-react" // Import Lucide icons for new CTAs

function HomePage() {
  useEffect(() => {
    document.title = "SabDecor | Home"
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const category = "" // declaration variable

  const features = [
    {
      icon: <FaTruckMoving className="w-8 h-8" />,
      title: "Free Shipping",
      description: "Order over $200",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: <FaHandHoldingUsd className="w-8 h-8" />,
      title: "Money Returns",
      description: "30 days money returns",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Customer support",
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
    },
  ]

  return (
    <>
      <Navbar />
      <HeroSection />

      {/* Modern Features Section */}
      <div className="relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${feature.bgGradient} rounded-2xl p-8 shadow-xl border border-white/50 backdrop-blur-sm hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=20 height=20 viewBox=0 0 20 20 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Ccircle cx=10 cy=10 r=1/%3E%3C/g%3E%3C/svg%3E')] rounded-2xl"></div>

                <div className="relative z-10 flex items-center space-x-6">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-medium">{feature.description}</p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Categories category={category} />
      <NewArrival />

      
     <section className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-violet-100">
          <img
            src={ads1}
            alt="Happy Customers Banner"
            className="w-full h-64 md:h-96 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/50 to-purple-900/50 flex flex-col items-center justify-center text-center p-8">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 mr-2" />
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Trusted by Thousands</h2>
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 ml-2" />
            </div>
            <p className="text-violet-100 text-lg md:text-xl max-w-2xl mb-8">
              Ready to transform your space? Explore our exquisite collections and find the perfect pieces for your
              home.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-violet-700 font-semibold rounded-2xl hover:bg-violet-50 transform hover:scale-105 transition-all duration-200 shadow-lg group"
            >
              <span>Discover Your Dream Furniture</span>
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
        </div>
      </div>
    </section>

      <Recomanded />

      

     
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl shadow-xl border border-violet-100 p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
              <Award className="w-8 h-8 text-violet-600 mx-4" />
              <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent mb-4">
              Our Community Speaks Volumes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Discover why thousands of customers trust SabDecor for their home furnishing needs.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg group"
            >
              <HeartHandshake className="w-5 h-5 mr-2" />
              <span>See Customer Reviews</span>
            </Link>
          </div>
        </div>
      </section>
      

      
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
