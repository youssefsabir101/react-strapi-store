import React, { useState, useEffect } from "react";
import Navbar from '../navbar/Navbar';
import Footer from '../staticPages/Footer';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { removeFromCart, resetCart } from "../redux/cartReducer";
import ConfirmationModal from './ConfirmationModal';

function Cart() {
  useEffect(() => {
    document.title = "SabDecor | Cart";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = useSelector(state => state.cart.products);
  const quantities = useSelector(state => state.cart.quantities);
  const dispatch = useDispatch();

  const subtotals = products.map(product => {
    const quantity = quantities[product.id] || 1;
    return product.price * quantity;
  });

  const subtotal = subtotals.reduce((acc, subtotal) => acc + subtotal, 0);
  const VAT = 25;
  const discount = -20;
  const totalPrice = subtotal + VAT + discount;

  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleRemoveClick = (productId) => {
    setSelectedProductId(productId);
    setShowModal(true);
  };

  const handleConfirmRemove = () => {
    dispatch(removeFromCart({ id: selectedProductId }));
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="container grid grid-cols-12 mx-auto md:gap-0 max-sm:w-full sm:gap-0 pt-4 pb-16 min-h-[96vh]">
        <div className="md:col-span-8 max-md:col-span-12 ">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-white ">
            <div className="mx-auto max-w-3xl">
              <header className="text-center">
                <h1 className="text-lg font-bold text-gray-900">Cart Items</h1>
              </header>
              <div className="mt-8 ">
                <ul className="space-y-4">
                  {products.length > 0 ? products.map(product => (
                    <li key={product.id} className="flex items-center gap-4 pb-2 rounded-lg px-4 shadow-lg bg-white">
                      <img
                        src={import.meta.env.VITE_API_URL + product.image}
                        alt=""
                        className="h-20 rounded object-cover border border-violet-700"
                      />
                      <div className="w-full">
                        <div className="justify-start bg-white">
                          <h3 className="text-md md:text-lg font-semibold text-black">{product.title}</h3>
                          <div className="mt-0.5 space-y-px text-gray-800">
                            <div className="grid max-sm:grid-cols-1 grid-cols-2">
                              <div className="max-sm:flex-wrap">
                                <p className="inline font-semibold text-gray-700 ">desc  : </p>
                                <div className="line-clamp-2 text-gray-500" title={product.desc}>{product.desc}</div>
                              </div>
                              <div className="">
                                <p className="inline font-semibold text-gray-700">color : </p>
                                <p className="inline text-gray-500">Gray</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-0.5 space-y-px text-gray-800">
                            <div className="grid grid-cols-2">
                              <div className="max-sm:flex-wrap">
                                <p className="inline text-lg font-semibold text-gray-00">Price : </p>
                                <p className="inline"><span className="font-bold text-violet-700">${product.price}</span></p>
                              </div>
                              <div className="flex flex-2 items-center justify-end gap-2">
                                <form>
                                  <label htmlFor="Line1Qty" className=""> Quantity  : </label>
                                  <span className="h-8 w-12 px-8 py-1 rounded border border-violet-700 bg-white p-0 text-center text-md text-black outline-none">
                                    {quantities[product.id] || 1}
                                  </span>
                                </form>
                                <button onClick={() => handleRemoveClick(product.id)} className="h-8 w-12 rounded border-none bg-red-600 p-0 text-center text-white transition hover:bg-red-700">
                                  <span className="sr-only">Remove item</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4 mx-auto"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                    : <div className="text-center ">
                      <h1 className="text-3xl font-bold max-md:mt-20 md:mt-40 text-violet-600 inline-block mr-8">Your Cart Is Empty ! </h1>
                      <Link to="/products" className='underline text-violet-700 font-bold text-lg text-center'> Go to shopping</Link>
                    </div>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 max-md:col-span-12 pt-1 md:pt-20 ">
          <div className="mt-8 flex justify-end px-4 shadow-lg py-14 rounded-md  ">
            <div className="w-screen max-w-lg mx-auto space-y-4 px-0 bg-white">
              <header className="text-center">
                <h1 className="text-lg font-bold  text-gray-900">Cart Totals</h1>
              </header>
              <dl className="space-y-0.5 text-sm text-gray-700">
                <div className="flex justify-between font-semibold">
                  <dt>Subtotal</dt>
                  <dd className=''>$  {subtotal.toFixed(2)}</dd>
                </div>

                <div className="flex justify-between font-semibold">
                  <dt>VAT</dt>
                  <dd>$ {VAT.toFixed(2)}</dd>
                </div>

                <div className="flex justify-between font-semibold">
                  <dt>Discount</dt>
                  <dd>$  {discount.toFixed(2)}</dd>
                </div>

                <div className="flex justify-between !text-base font-bold">
                  <dt>Total</dt>
                  <dd className=' '>$  {totalPrice.toFixed(2)}</dd>
                </div>
              </dl>

              <div className="flex justify-center mt-2 gap-1">
                {products.length > 0 ?
                  <>
                    <a href="#"
                      onClick={() => dispatch(resetCart())}
                      className="block rounded bg-violet-700 px-10 py-3 text-md text-white transition hover:scale-105" >
                      Reset
                    </a>

                    <Link to="/checkout" className="block rounded bg-violet-700 px-10 py-3 text-md text-white transition hover:scale-105" >
                      Checkout
                    </Link>
                  </>
                  : <>
                    <span className="block rounded bg-violet-700 px-10 py-3 text-md text-white cursor-not-allowed opacity-25" >
                      Reset
                    </span>

                    <span className="block rounded bg-violet-700 px-10 py-3 text-md text-white cursor-not-allowed opacity-25" >
                      Checkout
                    </span>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <ConfirmationModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmRemove}
        message="Are you sure you want to remove this item from your cart?"
      />
    </>
  )
}

export default Cart;
