import Footer from "./Footer";
import Navbar from "../navbar/Navbar"
import { useEffect } from "react";
import aboutImage1 from "../../assets/about1.jpg"
import aboutImage2 from "../../assets/about2.jpg"
function About() {
  useEffect(() => {
    document.title="SabDecor | About";
  },[]);
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <>
        <Navbar />
        <section className="py-20 dark:text-gray-800">
          <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-violet-700">Discover Quality Furniture for Your Home</h2>
              <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">Welcome to our furniture store, where style meets comfort.</p>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Enhance Your Living Space</h3>
                <p className="mt-3 text-lg dark:text-gray-600">Explore our wide range of furniture collections designed to elevate your home decor. Whether you're seeking modern minimalism or classic elegance, we have something for every style.</p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Premium Quality</h4>
                      <p className="mt-2 dark:text-gray-600">Crafted with the finest materials and attention to detail, our furniture is built to last and bring lasting joy to your home.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Personalized Service</h4>
                      <p className="mt-2 dark:text-gray-600">Our friendly and knowledgeable staff are here to assist you in finding the perfect pieces to suit your taste and lifestyle.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Express Delivery</h4>
                      <p className="mt-2 dark:text-gray-600">With our efficient delivery service, enjoy your new furniture sooner and start transforming your living space.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="mt-10 lg:mt-0">
                <img src={aboutImage1} alt="Furniture" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
              </div>
            </div>
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Experience Comfort and Style</h3>
                  <p className="mt-3 text-lg dark:text-gray-600">Indulge in luxurious comfort with our range of sofas, chairs, and beds. Each piece is designed with both aesthetics and ergonomics in mind, ensuring you enjoy both style and relaxation.</p>
                  <div className="mt-12 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Luxurious Comfort</h4>
                        <p className="mt-2 dark:text-gray-600">Sink into plush cushions and soft fabrics, and experience the ultimate relaxation in your own home.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Stylish Designs</h4>
                        <p className="mt-2 dark:text-gray-600">From sleek and modern to timeless and classic, our furniture designs cater to diverse tastes and preferences.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Customization Options</h4>
                        <p className="mt-2 dark:text-gray-600">Personalize your furniture to reflect your unique style with our wide range of customization options, from fabric choices to finishes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <img src={aboutImage2} alt="Furniture" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </section>



        <Footer />
      </>
    )
  }
  
  export default About