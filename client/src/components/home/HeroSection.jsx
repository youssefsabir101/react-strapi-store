function HeroSection() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat hero-section-bg-img" > {/* style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)' }} */}
    <div className="absolute inset-0 max-sm: bg-white/75 sm:bg-transparent from-black to-black/25 max-sm:bg-black sm:bg-gradient-to-r "></div>

    <div className="relative  py-32 sm:px-6 lg:flex lg:h-screen lg:items-center ">
      <div className=" text-center sm:text-left lg:pl-20 max-sm:mx-4">
        <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-7xl text-white">
          Let us find your{' '}
          <strong className="block font-extrabold text-violet-700">Forever Home.</strong>
        </h1>

        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga
          ducimus numquam ea!
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a href="#" className="block w-full rounded bg-violet-700 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-violet-500 sm:w-auto hover:scale-105 transition-all ease-in-out duration-100">
            Get Started
          </a>

          <a  href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-violet-700 shadow hover:text-violet-900 focus:outline-none focus:ring  sm:w-auto hover:scale-105 transition-all ease-in-out duration-100">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection