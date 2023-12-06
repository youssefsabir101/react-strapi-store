import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaShoppingCart,FaUserAlt,FaHeart} from "react-icons/fa"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <div className="px-4 py-4 mx-auto  md:max-w-full  md:px-4 lg:px-8 fixed w-full z-10 bg-white">
      <div className="relative flex items-center justify-between">
        <Link to="/" aria-label="Company" title="Company" className="inline-flex items-center" >
          
          <span className="ml-2 text-xl font-bold tracking-wide text-violet-700 uppercase">
            Decory
          </span>
        </Link>
        <ul className=" items-center hidden space-x-8 md:flex">
          <li>
            <Link to="/" aria-label="Home Page" title="Home Page" className="font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" aria-label="Our product" title="Our product" className="font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              Products
            </Link>
          </li>
          <li>
            <Link to="/Wishlist" aria-label="Cart" title="cart" className="font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              <FaHeart /><div className='cart-badge'><span className=''>0</span></div>
            </Link>
          </li>
          <li>
            <Link to="/cart" aria-label="Cart" title="cart" className="font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              <FaShoppingCart/><div className='cart-badge'><span className=''>00</span></div>
            </Link>
          </li>
          <li>
            <Link to="/" aria-label="Cart" title="cart" className="font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              <FaUserAlt/>
              
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-violet-700" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                      <span className="ml-2 text-xl font-bold tracking-wide text-violet-700 uppercase">
                        Decory
                      </span>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-violet-700" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" aria-label="Home Page" title="Home Page"
                        className="font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" aria-label="Our product" title="Our product" className="font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/Wishlist" aria-label="Cart" title="cart" className="font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" aria-label="Cart" title="cart" className="font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" title="About us" className="font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        About us
                      </Link>
                    </li>
                    
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

);
};

export default Navbar;
