"use client"

function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-br from-violet-800 via-purple-800 to-violet-900 text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <a href="#" className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-400 to-purple-400 rounded-xl flex items-center justify-center">
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
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                    SabDecor
                  </span>
                </a>
                <p className="text-violet-200 leading-relaxed max-w-md">
                  Transform your space with our premium furniture collection. Discover elegant designs that blend
                  comfort, style, and quality craftsmanship.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                <p className="text-violet-200 text-sm mb-4">
                  Get the latest updates on new arrivals and exclusive offers.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-l-xl text-white placeholder-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 rounded-r-xl transition-all duration-200 font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-6">
                Categories
              </h3>
              <nav className="space-y-3">
                {["Living Room", "Bedroom", "Kitchen", "Outdoor", "Office"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-violet-200 hover:text-white hover:translate-x-2 transition-all duration-200 group"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Featured */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-6">
                Featured
              </h3>
              <nav className="space-y-3">
                {["New Arrivals", "Best Sellers", "Sale Items", "Premium Collection"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-violet-200 hover:text-white hover:translate-x-2 transition-all duration-200 group"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-6">
                Support
              </h3>
              <nav className="space-y-3">
                {["Contact Us", "About Us", "FAQs", "Shipping Info", "Returns"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-violet-200 hover:text-white hover:translate-x-2 transition-all duration-200 group"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <p className="text-violet-200 text-sm">Stay connected for the latest updates</p>
              </div>

              <div className="flex space-x-4">
                {[
                  { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                  {
                    name: "Twitter",
                    icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                  },
                  { name: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" },
                  {
                    name: "LinkedIn",
                    icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center text-violet-200 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-200 group"
                    title={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                      {social.name === "Instagram" && (
                        <>
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />
                        </>
                      )}
                      {social.name === "LinkedIn" && <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-gradient-to-r from-violet-900 to-purple-900 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-sm text-violet-200">
                <span>© 2025 SabDecor. All rights reserved.</span>
                <span className="hidden md:block">•</span>
                <a
                  href="https://www.linkedin.com/in/youssef-sabir/"
                  rel="noopener noreferrer"
                  className="text-violet-300 hover:text-white transition-colors duration-200"
                  target="_blank"
                >
                  Designed by @ysf.sabir
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                  <a key={item} href="#" className="text-violet-200 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
