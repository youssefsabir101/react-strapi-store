import Categories from '../categories/Categories'
import HeroSection from './HeroSection'
import Navbar from '../navbar/Navbar'
import Footer from '../staticPages/Footer'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewArrival from '../NewArrival'
import { GrDeliver, GrUpdate, GrAssistListening } from "react-icons/gr";
import { FaHeadset, FaTruckMoving, FaHandHoldingUsd   } from "react-icons/fa";
import ads from '../../assets/offer.png'
import Recomanded from '../Recomanded'


function HomePage() {
  useEffect(() => {
    document.title="SabDecor | Home";
  },[]);
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
 const category = "" //declaration variable============================
    
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* features */} 
        <div className="container mx-auto py-8">
            <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto justify-center relative  -mt-16">
                <div className="shadow-md cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 bg-white rounded-xl px-3 py-6 flex justify-center items-center gap-6">
                    <FaTruckMoving  className="w-10 h-10 text-violet-700 object-contain " />
                    <div>
                        <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
                        <p className="text-gray-500 text-sm">Order over $200</p>
                    </div>
                </div>
                <div className="shadow-md cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 bg-white rounded-xl px-3 py-6 flex justify-center items-center gap-6">
                    <FaHandHoldingUsd   className="w-10 h-10 text-violet-700 object-contain " />
                    <div>
                        <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
                        <p className="text-gray-500 text-sm">30 days money returs</p>
                    </div>
                </div>
                <div className="shadow-md cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 bg-white rounded-xl px-3 py-6 flex justify-center items-center gap-6">
                    <FaHeadset className="w-10 h-10 text-violet-700 object-contain " />
                    <div>
                        <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
                        <p className="text-gray-500 text-sm">Customer support</p>
                    </div>
                </div>
            </div>
        </div>
      {/* /features  */}

      <Categories category={category}/> {/* <=================== hta had category why we using it . as a props ?????????? */}

      <NewArrival />

      {/* ads */}
        <div className="container pb-16 mx-auto">
            <Link to="/products">
                <img src={ads} alt="ads" className="w-full border border-violet-700 rounded-md"/>
            </Link>
        </div>
      {/* /ads */}

      <Recomanded />
      
      
      

      


      {/* Testimonial */}
        <section className="overflow-hidden testimonial">

          <div className="p-8 md:p-12 lg:px-16 lg:py-24 bg-white/75 sm:bg-transparent from-black to-black/25 max-sm:bg-black sm:bg-gradient-to-r">
            <div className="text-center sm:text-left ">
              <h2 className="text-2xl font-bold text-violet-700 sm:text-3xl md:text-5xl">
                Latest Shirts
              </h2>

              <p
                className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
                officia corporis quasi doloribus iure architecto quae voluptatum beatae
                excepturi dolores.
              </p>

              <div className="mt-4 sm:mt-8">
                <a
                  href="#"
                  className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Yours Today
                </a>
              </div>
            </div>
          </div>
        </section>
      {/* /Testimonial */}

      {/* stat */}
        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className='bg-violet-700 w-2 h-9 inline-block -mb-2'></span>
              <h2 className="inline-block text-2xl font-medium text-gray-800 uppercase pl-4 mb-6">Trusted by eCommerce Businesses</h2>

              <p className="mt-2 text-gray-500 sm:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
                laborum labore provident.
              </p>
            </div>

            <div className="mt-8 sm:mt-12">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col rounded-lg bg-violet-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Sales
                  </dt>

                  <dd className="text-4xl font-extrabold text-violet-700 md:text-5xl">
                    $4.8m
                  </dd>
                </div>

                <div className="flex flex-col rounded-lg bg-violet-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Official Addons
                  </dt>

                  <dd className="text-4xl font-extrabold text-violet-700 md:text-5xl">24</dd>
                </div>

                <div className="flex flex-col rounded-lg bg-violet-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Addons
                  </dt>

                  <dd className="text-4xl font-extrabold text-violet-700 md:text-5xl">86</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      {/* /stat */}



      <Footer />
    </>
  )
}

export default HomePage