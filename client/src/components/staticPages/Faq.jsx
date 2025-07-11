"use client"

import { useState, useEffect } from "react"
import Footer from "./Footer"
import Navbar from "../navbar/Navbar"

function Faq() {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title = "SabDecor | FAQs"
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "Do you offer free shipping?",
      answer:
        "Yes, we offer free shipping on all orders over $50. For orders under $50, standard shipping rates apply. We also offer expedited shipping options for faster delivery.",
      category: "Shipping",
    },
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows you to return items within 30 days of purchase for a full refund. Items must be in original condition with all packaging. Return shipping is free for defective items.",
      category: "Returns",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, once your order is shipped, you will receive a tracking number via email to monitor its delivery status. You can also track your order through your account dashboard.",
      category: "Orders",
    },
    {
      question: "Do you offer assembly services?",
      answer:
        "Yes, we offer assembly services for select furniture items. Our professional assembly team can set up your furniture at your location. Please contact customer support for pricing and availability.",
      category: "Services",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and buy-now-pay-later options through Klarna and Afterpay.",
      category: "Payment",
    },
    {
      question: "Do you have a physical store?",
      answer:
        "Yes, we have multiple physical store locations across the country. You can find our store nearest to you using our store locator on the website or contact us for directions.",
      category: "Locations",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support team via email at support@sabdecor.com, by phone at 1-800-123-4567, or through our live chat feature available 24/7 on our website.",
      category: "Support",
    },
    {
      question: "What are your business hours?",
      answer:
        "Our customer service hours are Monday to Friday, 9:00 AM to 6:00 PM EST. Our online store is available 24/7. Physical store hours may vary by location.",
      category: "Hours",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to select countries including Canada, UK, Australia, and EU countries. Shipping rates and delivery times vary by destination. Custom duties may apply.",
      category: "Shipping",
    },
  ]

  const categories = [...new Set(faqs.map((faq) => faq.category))]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-violet-100 pt-20">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Have a question? We've got answers! Check out our comprehensive FAQ section below to find the
                information you need.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden sticky top-6">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                  <h3 className="text-lg font-bold text-white flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    Categories
                  </h3>
                </div>
                <div className="p-4 space-y-2">
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-violet-50 rounded-xl border border-violet-100"
                    >
                      <span className="font-medium text-gray-700">{category}</span>
                      <span className="bg-violet-100 text-violet-700 text-xs font-bold px-2 py-1 rounded-full">
                        {faqs.filter((faq) => faq.category === category).length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                  <h2 className="text-xl font-bold text-white flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    All Questions ({faqs.length})
                  </h2>
                </div>

                <div className="p-6 space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-violet-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-6 text-left bg-gradient-to-r from-gray-50 to-violet-50 hover:from-violet-50 hover:to-purple-50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-start space-x-4">
                            <span className="bg-violet-100 text-violet-700 text-xs font-bold px-2 py-1 rounded-full mt-1">
                              {faq.category}
                            </span>
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                          </div>
                          <div className="flex-shrink-0">
                            <div
                              className={`w-8 h-8 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center text-white transition-transform duration-300 ${
                                openFaq === index ? "rotate-45" : ""
                              }`}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>

                      {openFaq === index && (
                        <div className="px-6 pb-6 bg-white">
                          <div className="border-t border-violet-100 pt-4">
                            <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Support Section */}
              <div className="mt-8 bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
                      />
                    </svg>
                    Still Need Help?
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Can't find the answer you're looking for? Our customer support team is here to help you with any
                    questions or concerns.
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
                      <p className="text-sm text-gray-600">support@sabdecor.com</p>
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
                      <p className="text-sm text-gray-600">1-800-123-4567</p>
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

                  <div className="mt-6 text-center">
                    <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                      Contact Support
                    </button>
                  </div>
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

export default Faq
