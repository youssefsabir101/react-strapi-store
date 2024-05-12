import Footer from "./Footer";
import Navbar from "../navbar/Navbar"
import { useEffect } from "react";
function ContactUs() {
  useEffect(() => {
    document.title="SabDecor | Contact";
  },[]);
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <>
        <Navbar />
            <section className="text-gray-600 body-font relative">
              <div className="container px-5 pt-28  mx-auto">
                <div className="pb-16">
                  <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-violet-700">Contact Us</h2>
                  <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">Welcome to contact, where style meets comfort.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <button className="flex mx-auto text-white bg-violet-700 border-0 py-2 px-8 focus:outline-none hover:bg-violet-600 rounded text-lg">Button</button>
                    </div>
                    <div className="p-2 w-full pt-8 mt-8 border-t text-center">
                      <a className="text-violet-500">sabir.ysf@sabdecor.com</a>
                      <p className="leading-normal my-5">49 lorem ipsum, Safi</p>
                      <span className="inline-flex">
                        <a className="text-gray-500 hover:text-violet-700">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-4 text-gray-500 hover:text-violet-700">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-4 text-gray-500 hover:text-violet-700">
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>
                        <a className="ml-4 text-gray-500 hover:text-violet-700">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>

                  </div>
                </div>
              </div>
              <div className="flex flex-col text-center w-full mb-12">
                <div className="py-16">
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-violet-700">Our Location</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">Welcome to our furniture store, where style meets comfort.</p>
                </div>
              </div>

              <div className="container mx-auto mb-10 body-font relative h-[500px]">
                <div className="absolute inset-0 bg-gray-500">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0" 
                    title="map" 
                    scrolling="no" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.6803685293196!2d-6.846830485165039!3d32.296347606088275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdaad1f730005dc3%3A0x264cd6a3b8e7fde!2sSafi%2C%20Morocco!5e0!3m2!1sen!2sin!4v1631808216436!5m2!1sen!2sin" 
                    >
                  </iframe>
                </div>

                
              </div>
            </section>
        <Footer />
      </>
    )
  }
  
  export default ContactUs