import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { useEffect } from "react";
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
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";

// Define the type of the product
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
    }
];

function ProductDetails() {
  useEffect(() => {
    document.title="Decory | Product Details";
  },[]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //use the useParams hook to get the product id from the route
  const { id } = useParams<{ id: string }>();
  // Convert the id to a number
  const productId = Number(id);

  //find the product that matches the id from the array
  const product = products.find((p) => p.id === productId);

  //check if the product exist...
  if (!product) {
    return <PageNotFound ErrorMessage="product not found !" GoBackUrl="/products" name="product" />;
  }
  
  return (
    <>
    <Navbar />
    
    
      <section className="text-gray-600 body-font overflow-hidden">
        
        <div className="container px-5 pt-24 pb-8 mx-auto" >
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full h-auto object-cover object-center rounded">
              <img
                alt="ecommerce"
                className="w-full lg:h-auto object-cover object-center rounded"
                src={product.imageSrc}
              />
              
              <div className=" grid grid-cols-4 gap-4 mt-4">
                  <img src={product.imageSrc} alt="product2" className="w-full cursor-pointer border"/>
                  <img src={product.imageSrc} alt="product2" className="w-full cursor-pointer border"/>
                  <img src={product.imageSrc} alt="product2" className="w-full cursor-pointer border"/>
                  <img src={product.imageSrc} alt="product2" className="w-full cursor-pointer border"/>
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-3xl title-font text-black tracking-widest">
                {products[1].name} <span className="text-sm text-violet-700">Id : {product.id}</span>
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-violet-700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-3">(142) Reviews</span>
                </span>
              </div>
              <div className="space-y-1 mb-4">
                <p className="text-gray-800 font-semibold space-x-2">
                    <span>Availability: </span>
                    <span className="text-green-600">In Stock</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Brand: </span>
                    <span className="text-gray-600">Apex</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Category: </span>
                    <span className="text-gray-600">Sofa</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">SKU: </span>
                    <span className="text-gray-600">BE45VGRT</span>
                </p>
              </div>

              <div className="flex items-baseline mb-1 space-x-4 font-roboto mt-4">
                <p className="title-font font-bold text-2xl text-gray-900">$45.00</p>
                <p className="text-base text-gray-400 line-through">$55.00</p>
              </div>

              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
              </p>
              <div className="mt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                    <div className="h-8 w-8 text-base flex items-center justify-center">4</div>
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                </div>
              </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {[...Array(3)].map((_, index) => (
                    <button
                      key={index}
                      className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none${
                        index !== 0 ? ` ml-1 bg-${index === 2 ? 'purple-500' : 'gray-700'} ` : ''
                      }`}
                    ></button>
                  ))}
                </div>
                {/* <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div> */}
              </div>
              <div className="flex">
                
                <button className="flex ml-auto text-white bg-violet-700 border-0 py-2 px-6 focus:outline-none hover:bg-violet-900 rounded">
                  ADD TO CART
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-5 pb-24 mx-auto">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">Product details</h3>
        <div className=" pt-6">
            <div className="text-gray-600">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus deleniti natus
                    dolore cum maiores suscipit optio itaque voluptatibus veritatis tempora iste facilis non aut
                    sapiente dolor quisquam, ex ab.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae accusantium voluptatem
                    blanditiis sapiente voluptatum. Autem ab, dolorum assumenda earum veniam eius illo fugiat possimus
                    illum dolor totam, ducimus excepturi
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia modi ut expedita! Iure molestiae
                    labore cumque nobis quasi fuga, quibusdam rem? Temporibus consectetur corrupti rerum veritatis
                    numquam labore amet.
                </p>
            </div>

            <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                    <th className="py-2 px-4 border border-gray-300 ">Blank, Brown, Red</th>
                </tr>
                <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
                    <th className="py-2 px-4 border border-gray-300 ">Latex</th>
                </tr>
                <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
                    <th className="py-2 px-4 border border-gray-300 ">55kg</th>
                </tr>
            </table>
        </div>
      </div>

      <div className="lg:container mx-auto pb-16  w-full ">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">RELATED PRODUCTS</h2>
        <div className="grid mx-12 sm:mx-2 sm:grid-cols-2 md:mx-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 md:gap-0 ">
            {products.map((product, id) => (
                <div key={id} className="shadow-xl sm:mx-2 md:mx-1 lg:mx-4 rounded-md bg-white my-2 cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
                    <Link to={`/products/${product.id}`}>
                        <img className="h-64 w-full rounded-md object-cover" src={product.imageSrc} alt="product image" />
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
            
        </div>
      </div>

      <Footer />
      </>
  )
}

export default ProductDetails