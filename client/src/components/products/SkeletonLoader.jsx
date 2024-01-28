import React from 'react'

function SkeletonLoader() {
  return (
    <div className="shadow-xl max-sm:mx-1 sm:mx-2 md:mx-1 lg:mx-2 xl:mx-4 rounded-md bg-white my-2 animate-pulse">
        <div className="max-sm:h-40 h-64 w-full rounded-md object-cover bg-violet-200" ></div>
        <div className='flex m-2'>
            <div className="max-sm:px2 bg-violet-200 w-16 rounded-full px-4 m-2 flex"></div>
            <div className='flex items-center ml-auto '>
                <a href="">
                    <div className='max-sm:grid-cols-2 bg-violet-200 shadow-xl w-10 h-10 rounded-full items-center justify-center inline-flex cursor-pointer hover:border-violet-700 hover:border transition-all ease-in-out duration-500'></div>
                </a>
            </div>
        </div>
        <div className='mx-4'>
            <div className='h-4 shadow-md bg-violet-200 rounded-md py-2 mb-4 w-full'></div>
            <div className='h-4 shadow-md bg-violet-200 rounded-md py-2 mb-4 w-full'></div>
        </div>
        <div className='mx-4'>
            <div className='h-10 shadow-md bg-violet-200 rounded-md py-2 mb-4 w-full'></div>
        </div>
    </div>
  )
}

export default SkeletonLoader