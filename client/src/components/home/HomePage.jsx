import Categories from '../categories/Categories'
import HeroSection from './HeroSection'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewArrival from '../NewArrival'
import { GrDeliver, GrUpdate, GrAssistListening } from "react-icons/gr";
import ads from '../../assets/offer.jpg'
import Recomanded from '../Recomanded'


function HomePage() {
  useEffect(() => {
    document.title="Decory | Home";
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
            <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
                <div className="border border-violet-700 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <GrDeliver className="w-12 h-12 object-contain " />
                    <div>
                        <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
                        <p className="text-gray-500 text-sm">Order over $200</p>
                    </div>
                </div>
                <div className="border border-violet-700 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <GrUpdate className="w-12 h-12 object-contain " />
                    <div>
                        <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
                        <p className="text-gray-500 text-sm">30 days money returs</p>
                    </div>
                </div>
                <div className="border border-violet-700 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <GrAssistListening className="w-12 h-12 object-contain " />
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
                <img src={ads} alt="ads" className="w-full"/>
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
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Trusted by eCommerce Businesses
              </h2>

              <p className="mt-4 text-gray-500 sm:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
                laborum labore provident impedit esse recusandae facere libero harum
                sequi.
              </p>
            </div>

            <div className="mt-8 sm:mt-12">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Sales
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    $4.8m
                  </dd>
                </div>

                <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Official Addons
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
                </div>

                <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Addons
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      {/* /stat */}

      {/* FAQs */}
        <div className="space-y-4 mx-10">
          <details
            className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <details
            className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>
        </div>
      {/* /FAQs */}

      <Footer />
    </>
  )
}

export default HomePage