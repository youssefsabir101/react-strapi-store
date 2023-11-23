import { Link } from "react-router-dom"
import Navbar from "./Navbar"



const PageNotFound = (props) => {
  return (
    <>
      <Navbar />
      
    <section className=" bg-violet-700">
      <div className="container mx-auto ">
        <div className=" flex items-center justify-center h-screen">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]" >
                Error !
              </h2>
              <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white" >
                {props.ErrorMessage}
              </h4>
              <p className="mb-8 text-lg text-white">
                The {props.name} you are looking for it maybe deleted
              </p>
              <Link to={props.GoBackUrl} className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-violet-700">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default PageNotFound