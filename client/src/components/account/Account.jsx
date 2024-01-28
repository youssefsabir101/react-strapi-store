import Navbar from "../navbar/Navbar"
import product1 from '../../assets/products/product1.jpg';
import product2 from '../../assets/products/product2.jpg';
import product3 from '../../assets/products/product3.jpg';
import product4 from '../../assets/products/product4.jpg';
import product5 from '../../assets/products/product5.jpg';
import product6 from '../../assets/products/product6.jpg';
import product7 from '../../assets/products/product7.jpg';
import product8 from '../../assets/products/product8.jpg';
import product9 from '../../assets/products/product9.jpg';
import product10 from '../../assets/products/product10.jpg';
import product11 from '../../assets/products/product11.jpg';
import Footer from "../staticPages/Footer";
import { useEffect } from "react";

const products= [
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
function Account() {
  useEffect(() => {
    document.title="SabDecor | Account";
  },[]);
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
        <Navbar />



    {/* <!-- wrapper --> */}
    <div className="container grid grid-cols-12 mx-auto  gap-6 max-sm:w-full max-sm:gap-0 pt-4 pb-16">

        {/* <!-- sidebar --> */}
        <div className="col-span-5 max-sm:hidden mt-16">
            <div className="px-4 py-3 flex items-center divide-y divide-violet-700 gap-4 bg-white rounded-md shadow-xl">
                <div className="flex-shrink-0">
                    <img src={product7} alt="profile"
                        className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"/>
                </div>
                <div className="flex-grow">
                    <p className="text-gray-600">Hello,</p>
                    <h4 className="text-gray-800 font-medium">Sabir</h4>
                </div>
            </div>

            <div className="mt-6 w-full px-4 py-8  bg-white rounded-md shadow-xl space-y-4 text-gray-600 divide-y divide-violet-700">
                <div className="space-y-1 pl-1">
                    <a href="#" className="block font-medium capitalize transition">
                        <span className="absolute top-0 text-base">
                            <i className="fa-regular fa-address-card"></i>
                        </span>
                        Manage account
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Profile information
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Manage addresses
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        Change password
                    </a>
                </div>

                <div className="space-y-1 pl-1 pt-4">
                    <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            <i className="fa-solid fa-box-archive"></i>
                        </span>
                        My order history
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        My returns
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        My Cancellations
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        My reviews
                    </a>
                </div>

                <div className="space-y-1 pl-1 pt-4">
                    <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            <i className="fa-regular fa-credit-card"></i>
                        </span>
                        Payment methods
                    </a>
                    <a href="#" className="relative hover:text-primary block capitalize transition">
                        voucher
                    </a>
                </div>

                <div className="space-y-1 pl-1 pt-4">
                    <a href="#" className="relative text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            <i className="fa-regular fa-heart"></i>
                        </span>
                        My wishlist
                    </a>
                </div>

                <div className="space-y-1 pl-1 pt-4">
                    <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </span>
                        Logout
                    </a>
                </div>

            </div>
        </div>
        {/* <!-- ./sidebar --> */}

        {/* <!-- wishlist --> */}
        <section className="col-span-7 max-sm:col-span-12">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-white h-screen">
                <div className="mx-auto max-w-3xl">
                <header className="text-center mt-10">
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Login</h1>
                </header>

                <div className="mt-8 ">
                    {/* ************
                    *************
                    ******************
                    ************** */}
                </div>
                </div>
            </div>
        </section>
        {/* ./wishlist */}
    </div>
    {/* <!-- ./wrapper --> */}

    <Footer />
    </>
  )
}

export default Account