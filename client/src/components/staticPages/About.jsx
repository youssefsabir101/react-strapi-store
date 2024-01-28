import Footer from "./Footer";
import Navbar from "../navbar/Navbar"
import { useEffect } from "react";
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
        <section className="relative max-sm:h-[28vh] md:h-[30vh] lg:h-[40vh] bg-cover bg-center bg-no-repeat hero-section-bg-img rounded-bl-[100px]" >
          <div className="absolute inset-0 max-sm: bg-black/75 rounded-bl-[100px]"></div>

          <div className="relative py-32 sm:px-6 max-sm:h-[28vh] md:h-[30vh] lg:h-[40vh] items-center">
            <div className="my-0 text-center sm:text-center max-sm:mx-4 ">
                <span className='bg-violet-700 w-3 max-sm:h-8 max-sm:-mb-1 sm:h-12 md:h-12 lg:h-16  mr-4 inline-block -mb-2'></span>
                <h2 className="inline-block text-3xl font-extrabold sm:text-5xl lg:text-7xl text-white">About Us</h2>

                <p className="mt-6 text-white sm:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
            </div>
          </div>
        </section>










        
        {/* FAQs */}
        <section className="relative bg-transparent -mt-20 ">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              
            </div>

            <div className="mt-8 sm:mt-12 space-y-4 bg-white rounded-lg p-4">
              <details
                className="group border-s-4 border-violet-700 bg-violet-200 p-6 [&_summary::-webkit-details-marker]:hidden rounded-md"
                
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 ">
                  <h2 className="text-lg font-medium text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-violet-700 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 transition duration-500 group-open:-rotate-45"
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

                <p className="mt-4 leading-relaxed text-gray-700 " >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                  molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                  voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                  earum similique!
                </p>
              </details>

              <details
                className="group border-s-4 border-violet-700 bg-violet-200 p-6 [&_summary::-webkit-details-marker]:hidden rounded-md"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-violet-700 sm:p-3">
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
          </div>
        </section>
      {/* /FAQs */}

      
        
        
        <Footer />
      </>
    )
  }
  
  export default About