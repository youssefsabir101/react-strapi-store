import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
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


const products= [
  {
    id: 0,
    name: 'VintageBag',
    brandName: 'ZZ',
    price: 71,
    stat: 'New',
    imageSrc: product8,
    description: 'classNameic vintage leather bag with multiple compartments and adjustable strap.',
  },
  {
      id: 1,
      name: 'Earthen Bottle',
      brandName: 'AA',
      price: 48,
      stat: 'New',
      imageSrc: product1,
      description: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      brandName: 'BB',
      price: 35,
      stat: 'New',
      imageSrc: product2,
      description: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      brandName: 'CC',
      price: 89,
      stat: 'New',
      imageSrc: product3,
      description: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      brandName: 'DD',
      price: 35,
      stat: 'New',
      imageSrc: product4,
      description: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Artisanal Wooden Desk',
      brandName: 'EE',
      price: 120,
      stat: 'New',
      imageSrc: product5,
      description: 'Handcrafted wooden desk with drawers and vintage aesthetic.',
    },
    {
      id: 6,
      name: 'Leather Office Chair',
      brandName: 'FF',
      price: 199,
      stat: 'New',
      imageSrc: product6,
      description: 'Luxurious leather office chair with ergonomic design and cushioned seat.',
    },
    {
      id: 7,
      name: 'Modern Desk Lamp',
      brandName: 'GG',
      price: 45,
      stat: 'New',
      imageSrc: product7,
      description: 'Sleek and minimalist modern desk lamp with adjustable arm and LED lighting.',
    },
    {
      id: 8,
      name: 'Vintage Leather Bag',
      brandName: 'HH',
      price: 75,
      stat: 'New',
      imageSrc: product8,
      description: 'classNameic vintage leather bag with multiple compartments and adjustable strap.',
    },
    {
      id: 9,
      name: 'Office Leather Chair',
      brandName: 'II',
      price: 189,
      stat: 'New',
      imageSrc: product9,
      description: 'Luxurious leather office chair with ergonomic design and cushioned seat.',
    },
    {
      id: 10,
      name: 'Desk Lamp',
      brandName: 'JJ',
      price: 55,
      stat: 'New',
      imageSrc: product10,
      description: 'Sleek and minimalist modern desk lamp with adjustable arm and LED lighting.',
    },
    {
      id: 11,
      name: 'Leather Vintage Bag',
      brandName: 'KK',
      price: 65,
      stat: 'New',
      imageSrc: product11,
      description: 'classNameic vintage leather bag with multiple compartments and adjustable strap.',
    },{
      id: 12,
      name: 'Earthen Bottle',
      brandName: 'LL',
      price: 48,
      stat: 'New',
      imageSrc: product1,
      description: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 13,
      name: 'Nomad Tumbler',
      brandName: 'MM',
      price: 35,
      stat: 'New',
      imageSrc: product2,
      description: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 14,
      name: 'Focus Paper Refill',
      brandName: 'NN',
      price: 89,
      stat: 'New',
      imageSrc: product3,
      description: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 15,
      name: 'Machined Mechanical Pencil',
      brandName: 'OO',
      price:35,
      stat: 'New',
      imageSrc: product4,
      description: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 16,
      name: 'Artisanal Wooden Desk',
      brandName: 'PP',
      price: 120,
      stat: 'New',
      imageSrc: product5,
      description: 'Handcrafted wooden desk with drawers and vintage aesthetic.',
    },
    {
      id: 17,
      name: 'Leather Office Chair',
      brandName: 'QQ',
      price: 199,
      stat: 'New',
      imageSrc: product6,
      description: 'Luxurious leather office chair with ergonomic design and cushioned seat.',
    },
];

function NewArrival() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1280 },
          items: 4
        },
        tablet2: {
          breakpoint: { max: 1024, min: 860 },
          items: 3
        },
        tablet1: {
          breakpoint: { max:860, min: 640 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 2
        }
      };

      

  return (
    <div className='lg:container mx-auto  py-16 sm:px-6 sm:py-24   '>
      <h2 className="text-2xl font-medium text-gray-800 uppercase pl-4 mb-6">Top New Arrival</h2>
            <Carousel responsive={responsive}
                      additionalTransfrom={0}
                      arrows
                      autoPlay
                      autoPlaySpeed={2000}
                      centerMode={false}
                      className="py-4"
                      containerClass="container-with-dots"
                      dotListClass=" "
                      draggable
                      focusOnSelect={false}
                      infinite
                      itemClass=""
                      keyBoardControl
                      minimumTouchDrag={80}
                      pauseOnHover
                      renderArrowsWhenDisabled={false}
                      renderButtonGroupOutside={false}
                      renderDotsOutside={false}
                    >

                {products.map((product, id) => (
                  
                    <div key={id} className="shadow-lg max-w-[320px] max-sm:mx-2 mx-auto md:mx-4 rounded-lg bg-white cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
                      <Link to={`/products/${product.id}`}>
                        <span className="relative bg-violet-700 w-16 rounded-lg rounded-tl-none rounded-br-none px-4 -mb-6 ml-auto font-bold flex text-white">{product.stat}</span>
                        <img className="max-sm:h-40 h-64 w-full rounded-md object-cover " src={product.imageSrc} alt="product image" />
                      </Link>
                        <div className='flex m-2'>
                            <p className="bg-violet-700 w-14 rounded-full px-4 m-2 font-bold flex text-white">{product.price}</p>
                            
                            <div className='flex items-center ml-auto '>
                              <Link to={`/Wishlist`}>
                                <span className='bg-gray-100 shadow-xl w-10 h-10 rounded-full items-center justify-center inline-flex cursor-pointer hover:border-violet-700 hover:border transition-all ease-in-out duration-500'>
                                    <svg
                                        fill="white"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </span>
                              </Link>
                            </div>
                        </div>
                      
                        <Link to={`/products/${product.id}`}>
                          <h2 className='font-semibold px-4'>{product.name}</h2>
                          <p className='text-gray-500 px-4'>Lorem ipsum dolor sit amet consectetur.</p>
                        </Link>

                        <div className='mx-4'>
                            <button className='shadow-md bg-violet-700 rounded-md py-2 mb-4 w-full text-white hover:scale-105 transition-all ease-in-out duration-100'>Add to Cart</button>
                        </div>
                    </div>
                ))}

            </Carousel>

        
    </div>
  )
}

export default NewArrival