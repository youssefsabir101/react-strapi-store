"use client"

function SkeletonLoader() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 md:h-64 bg-gradient-to-r from-violet-100 to-purple-100"></div>

      <div className="p-6">
        {/* Price Section Skeleton */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-16 bg-violet-200 rounded-lg"></div>
            <div className="h-6 w-12 bg-red-200 rounded-lg"></div>
          </div>
          <div className="h-6 w-20 bg-green-200 rounded-full"></div>
        </div>

        {/* Rating Skeleton */}
        <div className="flex items-center mb-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-4 h-4 bg-yellow-200 rounded"></div>
            ))}
          </div>
          <div className="h-4 w-24 bg-gray-200 rounded ml-2"></div>
        </div>

        {/* Title and Description Skeleton */}
        <div className="mb-4">
          <div className="h-6 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>

        {/* Buttons Skeleton */}
        <div className="flex space-x-2">
          <div className="flex-1 h-12 bg-gradient-to-r from-violet-200 to-purple-200 rounded-xl"></div>
          <div className="h-12 w-12 bg-violet-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoader
