"use client"

import { useEffect } from "react"
import Footer from "./Footer"
import Navbar from "../navbar/Navbar"
import aboutImage1 from "../../assets/about1.jpg"
import aboutImage2 from "../../assets/about2.jpg"

function About() {
  useEffect(() => {
    document.title = "SabDecor | About"
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Premium Quality",
      description:
        "Crafted with the finest materials and attention to detail, our furniture is built to last and bring lasting joy to your home.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Personalized Service",
      description:
        "Our friendly and knowledgeable staff are here to assist you in finding the perfect pieces to suit your taste and lifestyle.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Express Delivery",
      description:
        "With our efficient delivery service, enjoy your new furniture sooner and start transforming your living space.",
    },
  ]

  const comfortFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Luxurious Comfort",
      description:
        "Sink into plush cushions and soft fabrics, and experience the ultimate relaxation in your own home.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z"
          />
        </svg>
      ),
      title: "Stylish Designs",
      description:
        "From sleek and modern to timeless and classic, our furniture designs cater to diverse tastes and preferences.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
          />
        </svg>
      ),
      title: "Customization Options",
      description:
        "Personalize your furniture to reflect your unique style with our wide range of customization options, from fabric choices to finishes.",
    },
  ]

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "500+", label: "Furniture Pieces" },
    { number: "50+", label: "Design Awards" },
  ]

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every piece is carefully selected and tested.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: "Customer Satisfaction",
      description: "Your happiness is our priority. We go above and beyond to exceed expectations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description: "We constantly evolve and innovate to bring you the latest in furniture design.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Sustainability",
      description: "We're committed to sustainable practices and eco-friendly materials.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
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
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent mb-4">
                Discover Quality Furniture for Your Home
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Welcome to our furniture store, where style meets comfort. We've been creating beautiful living spaces
                for over a decade.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Stats Section */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
              <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                <h2 className="text-xl font-bold text-white text-center">Our Achievements</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-violet-700 mb-2">{stat.number}</div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* First Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
              <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                <h2 className="text-xl font-bold text-white">Enhance Your Living Space</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Explore our wide range of furniture collections designed to elevate your home decor. Whether you're
                  seeking modern minimalism or classic elegance, we have something for every style.
                </p>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
              <img
                src={aboutImage1 || "/placeholder.svg"}
                alt="Quality Furniture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Image */}
            <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden lg:order-1">
              <img
                src={aboutImage2 || "/placeholder.svg"}
                alt="Comfortable Furniture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden lg:order-2">
              <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                <h2 className="text-xl font-bold text-white">Experience Comfort and Style</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Indulge in luxurious comfort with our range of sofas, chairs, and beds. Each piece is designed with
                  both aesthetics and ergonomics in mind, ensuring you enjoy both style and relaxation.
                </p>
                <div className="space-y-6">
                  {comfortFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
              <h2 className="text-xl font-bold text-white text-center flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Our Core Values
              </h2>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-gradient-to-r from-gray-50 to-violet-50 rounded-xl border border-violet-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Home?</h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Visit our showroom or browse our online collection to discover the perfect furniture pieces for your
                  space. Our team is ready to help you create the home of your dreams.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
                    Visit Showroom
                  </button>
                  <button className="bg-white/20 border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200">
                    Browse Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
