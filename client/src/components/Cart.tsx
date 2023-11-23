import Footer from "./Footer"
import Navbar from "./Navbar"

import product1 from '../assets/products/product1.jpg';
import product2 from '../assets/products/product2.jpg';
import product3 from '../assets/products/product3.jpg';
import product4 from '../assets/products/product4.jpg';
import product5 from '../assets/products/product5.jpg';
import product6 from '../assets/products/product6.jpg';
import product7 from '../assets/products/product7.jpg';
import product8 from '../assets/products/product8.jpg';
import product9 from '../assets/products/product9.jpg';
import product10 from '../assets/products/product10.jpg';
import product11 from '../assets/products/product11.jpg';

type Product = {
  id: number;
  name: string;
  imageSrc: string;
  price: number;
  description: string;
  brandName: string;
};
const products: Product[] = [
  {
    id: 0,
    name: 'VintageBag',
    brandName: 'ZZ',
    price: 71,
    imageSrc: product8,
    description: 'classNameic vintage leather bag with multiple compartments and adjustable strap.',
  },
  {
      id: 1,
      name: 'Earthen Bottle',
      brandName: 'AA',
      price: 48,
      imageSrc: product1,
      description: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      brandName: 'BB',
      price: 35,
      imageSrc: product2,
      description: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      brandName: 'CC',
      price: 89,
      imageSrc: product3,
      description: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      brandName: 'DD',
      price: 35,
      imageSrc: product4,
      description: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Artisanal Wooden Desk',
      brandName: 'EE',
      price: 120,
      imageSrc: product5,
      description: 'Handcrafted wooden desk with drawers and vintage aesthetic.',
    },
    {
      id: 6,
      name: 'Leather Office Chair',
      brandName: 'FF',
      price: 199,
      imageSrc: product6,
      description: 'Luxurious leather office chair with ergonomic design and cushioned seat.',
    },
    {
      id: 7,
      name: 'Modern Desk Lamp',
      brandName: 'GG',
      price: 45,
      imageSrc: product7,
      description: 'Sleek and minimalist modern desk lamp with adjustable arm and LED lighting.',
    },
    {
      id: 8,
      name: 'Vintage Leather Bag',
      brandName: 'HH',
      price: 75,
      imageSrc: product8,
      description: 'classNameic vintage leather bag with multiple compartments and adjustable strap.',
    },
    {
      id: 9,
      name: 'Office Leather Chair',
      brandName: 'II',
      price: 189,
      imageSrc: product9,
      description: 'Luxurious leather office chair with ergonomic design and cushioned seat.',
    },
    {
      id: 10,
      name: 'Desk Lamp',
      brandName: 'JJ',
      price: 55,
      imageSrc: product10,
      description: 'Sleek and minimalist modern desk lamp with adjustable arm and LED lighting.',
    },
    {
      id: 11,
      name: 'Leather Vintage Bag',
      brandName: 'KK',
      price: 65,
      imageSrc: product11,
      description: 'classNameic vintage leather bag with multiple compartments and adjustable strap.',
    },{
      id: 12,
      name: 'Earthen Bottle',
      brandName: 'LL',
      price: 48,
      imageSrc: product1,
      description: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 13,
      name: 'Nomad Tumbler',
      brandName: 'MM',
      price: 35,
      imageSrc: product2,
      description: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 14,
      name: 'Focus Paper Refill',
      brandName: 'NN',
      price: 89,
      imageSrc: product3,
      description: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 15,
      name: 'Machined Mechanical Pencil',
      brandName: 'OO',
      price:35,
      imageSrc: product4,
      description: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 16,
      name: 'Artisanal Wooden Desk',
      brandName: 'PP',
      price: 120,
      imageSrc: product5,
      description: 'Handcrafted wooden desk with drawers and vintage aesthetic.',
    },
    {
      id: 17,
      name: 'Leather Office Chair',
      brandName: 'QQ',
      price: 199,
      imageSrc: product6,
      description: 'Luxurious leather office chair with ergonomic design and cushioned seat.',
    },
];
function Cart() {
  return (
	<>
		<Navbar />
		<section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-white h-screen">
        <div className="mx-auto max-w-3xl">
          <header className="text-center mt-10">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>

          <div className="mt-8 ">
            <ul className="space-y-4">

              <li className="flex items-center gap-4 pb-2 rounded-lg px-4 shadow-lg ">
                <img
                  src={product1}
                  alt=""
                  className="h-20 rounded object-cover border border-violet-700"
                />
                <div className="w-full">
                  <div className="justify-start bg-white">
                    <h3 className="text-md md:text-lg font-semibold text-black">{products[0].name}</h3>

                    <div className="mt-0.5 space-y-px text-gray-800">
                      <div className="grid max-sm:grid-cols-1 grid-cols-2">
                          <div className=" max-sm:flex-wrap">
                            <p className="inline font-semibold text-gray-500">Brand: </p>
                            <p className="inline text-gray-500">{products[0].brandName}</p>
                          </div>
                          <div className="">
                            <p className="inline font-semibold text-gray-500">color: </p>
                            <p className="inline text-gray-500">Gray</p>
                          </div>
                      </div>
                    </div>

                    <div className="mt-0.5 space-y-px text-gray-800">
                      <div className="grid grid-cols-2">
                          <div className=" max-sm:flex-wrap">
                            <p className="inline text-lg font-semibold ">Price: </p>
                            <p className="inline"><span className="font-bold text-violet-700">${products[0].price}</span></p>
                          </div>
                          <div className="flex flex-2 items-center justify-end gap-2">
                            <form>
                              <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                              <input
                                type="number"
                                min="1"
                                value="1"
                                id=""
                                className="h-8 w-12 rounded border border-violet-700 bg-white p-0 text-center text-md text-black outline-none"/>
                            </form>

                            <button className="h-8 w-12 rounded border-none bg-red-500 p-0 text-center text-white transition hover:bg-red-600">
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

              <li className="flex items-center gap-4 pb-2 rounded-lg px-4 shadow-lg ">
                <img
                  src={product2}
                  alt=""
                  className="h-20 rounded object-cover border border-violet-700"
                />
                <div className="w-full">
                  <div className="justify-start bg-white">
                    <h3 className="text-md md:text-lg font-semibold text-black">{products[1].name}</h3>

                    <div className="mt-0.5 space-y-px text-gray-800">
                      <div className="grid max-sm:grid-cols-1 grid-cols-2">
                          <div className=" max-sm:flex-wrap">
                            <p className="inline font-semibold text-gray-500">Brand: </p>
                            <p className="inline text-gray-500">{products[1].brandName}</p>
                          </div>
                          <div className="">
                            <p className="inline font-semibold text-gray-500">color: </p>
                            <p className="inline text-gray-500">Gray</p>
                          </div>
                      </div>
                    </div>

                    <div className="mt-0.5 space-y-px text-gray-800">
                      <div className="grid grid-cols-2">
                          <div className=" max-sm:flex-wrap">
                            <p className="inline text-lg font-semibold ">Price: </p>
                            <p className="inline"><span className="font-bold text-violet-700">${products[1].price}</span></p>
                          </div>
                          <div className="flex flex-2 items-center justify-end gap-2">
                            <form>
                              <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                              <input
                                type="number"
                                min="1"
                                value="1"
                                id=""
                                className="h-8 w-12 rounded border border-violet-700 bg-white p-0 text-center text-md text-black outline-none"/>
                            </form>

                            <button className="h-8 w-12 rounded border-none bg-red-500 p-0 text-center text-white transition hover:bg-red-600">
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

              <li className="flex items-center gap-4 pb-2 rounded-lg px-4 shadow-lg ">
                <img
                  src={product3}
                  alt=""
                  className="h-20 rounded object-cover border border-violet-700"
                />
                <div className="w-full">
                  <div className="justify-start bg-white">
                    <h3 className="text-md md:text-lg font-semibold text-black">{products[2].name}</h3>

                    <div className="mt-0.5 space-y-px text-gray-800">
                      <div className="grid max-sm:grid-cols-1 grid-cols-2">
                          <div className=" max-sm:flex-wrap">
                            <p className="inline font-semibold text-gray-500">Brand: </p>
                            <p className="inline text-gray-500">{products[2].brandName}</p>
                          </div>
                          <div className="">
                            <p className="inline font-semibold text-gray-500">color: </p>
                            <p className="inline text-gray-500">Gray</p>
                          </div>
                      </div>
                    </div>

                    <div className="mt-0.5 space-y-px text-gray-800">
                      <div className="grid grid-cols-2">
                          <div className=" max-sm:flex-wrap">
                            <p className="inline text-lg font-semibold ">Price: </p>
                            <p className="inline"><span className="font-bold text-violet-700">${products[2].price}</span></p>
                          </div>
                          <div className="flex flex-2 items-center justify-end gap-2">
                            <form>
                              <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                              <input
                                type="number"
                                min="1"
                                value="1"
                                id=""
                                className="h-8 w-12 rounded border border-violet-700 bg-white p-0 text-center text-md text-black outline-none"/>
                            </form>

                            <button className="h-8 w-12 rounded border-none bg-red-500 p-0 text-center text-white transition hover:bg-red-600">
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

              <li className="flex items-center gap-4 pb-2 rounded-lg px-4 shadow-lg">
                <img
                  src={product4}
                  alt=""
                  className="h-20 rounded object-cover border border-violet-700"
                />
                <div className="w-full">
                  <div className="justify-start bg-white">
                    <h3 className="text-md md:text-lg font-semibold text-black">{products[3].name}</h3>

                    <div className="mt-0.5 space-y-px text-gray-800">
                      <div className="grid max-sm:grid-cols-1 grid-cols-2">
                          <div className=" max-sm:flex-wrap">
                            <p className="inline font-semibold text-gray-500">Brand: </p>
                            <p className="inline text-gray-500">{products[3].brandName}</p>
                          </div>
                          <div className="">
                            <p className="inline font-semibold text-gray-500">color: </p>
                            <p className="inline text-gray-500">Gray</p>
                          </div>
                      </div>
                    </div>

                    <div className="mt-0.5 space-y-px text-gray-800">
                      <div className="grid grid-cols-2">
                          <div className=" max-sm:flex-wrap">
                            <p className="inline text-lg font-semibold ">Price: </p>
                            <p className="inline"><span className="font-bold text-violet-700">${products[3].price}</span></p>
                          </div>
                          <div className="flex flex-2 items-center justify-end gap-2">
                            <form>
                              <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                              <input
                                type="number"
                                min="1"
                                value="1"
                                id=""
                                className="h-8 w-12 rounded border border-violet-700 bg-white p-0 text-center text-md text-black outline-none"/>
                            </form>

                            <button className="h-8 w-12 rounded border-none bg-red-500 p-0 text-center text-white transition hover:bg-red-600">
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
              

              
            </ul>

            <div className="mt-8 flex justify-end rounded-lg px-4 shadow-lg py-8 bg-white">
              <div className="w-screen max-w-lg mx-auto space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>£250</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>VAT</dt>
                    <dd>£25</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£20</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>£200</dd>
                  </div>
                </dl>

                {/* <div className="flex justify-end">
                  <span
                    className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>

                    <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
                  </span>
                </div> */}

                <div className="flex justify-center mt-2">
                  <a href="#" className="block rounded bg-violet-700 px-10 py-3 text-md text-white transition hover:scale-105" >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
	</>
  )
}

export default Cart