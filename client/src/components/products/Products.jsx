"use client"
import Navbar from "../navbar/Navbar"
import ProductsList from "./ProductsList"
import Footer from "../staticPages/Footer"
import { useState, useEffect, useContext } from "react"
import StoreContext from "../../hooks/storeContext"
import useFetch from "../../hooks/useFetch"
import { FaFilter, FaSearch, FaTimes } from "react-icons/fa"
import qs from "qs"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

// Filter Sidebar Component
function FilterSidebar({ searchInput }) {
  // Get data from API
  const [categories, setCategories] = useState([])
  const { data, loading } = useFetch("/api/categories?populate=*")
  useEffect(() => {
    data && setCategories(data)
  }, [data])

  // Get context from Store
  const { setFilter, selectedCategories, setSelectCategories } = useContext(StoreContext)

  // Min-max pricing handle
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(1000)

  // State to store selected colors
  const [selectedColors, setSelectedColors] = useState([])

  // Handle filter categories function
  const handleFilters = (e) => {
    // Convert selectedID to a number to match category.id type
    const selectedID = Number.parseInt(e.target.dataset.category)
    const isChecked = e.target.checked
    setSelectCategories((prevSelectedCategories) => {
      if (isChecked) {
        // Add only if not already present
        if (!prevSelectedCategories.includes(selectedID)) {
          return [...prevSelectedCategories, selectedID]
        }
        return prevSelectedCategories
      } else {
        return prevSelectedCategories.filter((id) => id !== selectedID)
      }
    })
  }

  const handleMinChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (value <= maxValue) {
      setMinValue(value)
    }
  }
  const handleMaxChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (value >= minValue) {
      setMaxValue(value)
    }
  }
  const handleSliderChange = ([min, max]) => {
    if (min <= max) {
      setMinValue(min)
      setMaxValue(max)
    }
  }

  // Function to handle color filter changes
  const handleColorFilters = (e) => {
    const selectedColor = e.target.dataset.color
    const isChecked = e.target.checked
    setSelectedColors((prevSelectedColors) => {
      if (isChecked) {
        return [...prevSelectedColors, selectedColor]
      } else {
        return prevSelectedColors.filter((color) => color !== selectedColor)
      }
    })
  }

  // Consolidated useEffect for all filters and scroll to top
  useEffect(() => {
    const filters = {
      price: {
        $gte: minValue,
        $lte: maxValue,
      },
      color: {
        id: {
          $in: selectedColors,
        },
      },
    }

    // Conditionally add categories filter only if selectedCategories is not empty
    if (selectedCategories.length > 0) {
      filters.categories = {
        id: {
          $in: selectedCategories,
        },
      }
    }

    // Add search filter only if searchInput is not empty
    if (searchInput) {
      filters.Title = { $containsi: searchInput } // Assuming 'Title' is the field to search
    }

    // Use qs.stringify to build the entire query string, including populate
    const query = qs.stringify({ filters, populate: "*" })
    setFilter(import.meta.env.VITE_API_URL + "/api/products?" + query) // Removed redundant populate=*&
    window.scrollTo(0, 0) // Scroll to top after filter changes
  }, [selectedCategories, minValue, maxValue, selectedColors, searchInput, setFilter])

  const colors = [
    { id: "2", name: "Black", bg: "bg-black" },
    { id: "1", name: "White", bg: "bg-white border-2" },
    { id: "3", name: "Gray", bg: "bg-gray-600" },
    { id: "4", name: "Blue", bg: "bg-blue-600" },
    { id: "5", name: "Purple", bg: "bg-violet-600" },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
      <div className="p-6 space-y-8">
        {/* Categories Filter */}
        <div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent mb-6">
            Categories
          </h3>
          <div className="space-y-3">
            {loading ? (
              <div className="space-y-2">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="h-4 bg-violet-100 rounded animate-pulse"></div>
                ))}
              </div>
            ) : (
              categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center px-3 py-2 rounded-xl hover:bg-violet-50 transition-all duration-200 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    onChange={handleFilters}
                    data-category={category.id}
                    // Check if the category is currently selected (after ensuring selectedID is a number)
                    checked={selectedCategories.includes(Number.parseInt(category.id))}
                    className="w-5 h-5 text-violet-600 bg-white border-2 border-violet-300 rounded focus:ring-violet-500 focus:ring-2 accent-violet-600"
                  />
                  <span className="ml-3 text-gray-700 group-hover:text-violet-700 font-medium">
                    {category.attributes.title}
                  </span>
                </label>
              ))
            )}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent mb-6">
            Price Range
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <input
                type="number"
                value={minValue}
                onChange={handleMinChange}
                className="w-20 px-3 py-2 border-2 border-violet-200 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all text-sm"
                placeholder="Min"
                min={0}
              />
              <span className="text-violet-400 font-bold">—</span>
              <input
                type="number"
                value={maxValue}
                onChange={handleMaxChange}
                className="w-20 px-3 py-2 border-2 border-violet-200 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all text-sm"
                placeholder="Max"
                min={0}
              />
            </div>
            <div className="px-2">
              <Slider
                min={0}
                max={1000}
                range
                value={[minValue, maxValue]}
                onChange={handleSliderChange}
                trackStyle={[{ backgroundColor: "#8b5cf6", height: 6 }]}
                railStyle={{ backgroundColor: "#e5e7eb", height: 6 }}
                handleStyle={[
                  {
                    backgroundColor: "#ffffff",
                    border: "3px solid #8b5cf6",
                    width: 20,
                    height: 20,
                    boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)",
                  },
                  {
                    backgroundColor: "#ffffff",
                    border: "3px solid #8b5cf6",
                    width: 20,
                    height: 20,
                    boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)",
                  },
                ]}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>${minValue}</span>
              <span>${maxValue}</span>
            </div>
          </div>
        </div>

        {/* Colors Filter */}
        <div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent mb-6">
            Colors
          </h3>
          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <label key={color.id} className="relative cursor-pointer group">
                <input type="checkbox" data-color={color.id} onChange={handleColorFilters} className="sr-only peer" />
                <div
                  className={`w-10 h-10 rounded-full ${color.bg} border-2 border-violet-200 group-hover:border-violet-400 peer-checked:border-violet-600 peer-checked:ring-2 peer-checked:ring-violet-300 transition-all duration-200 group-hover:scale-110 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-violet-600 opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-violet-600 rounded-full opacity-0 peer-checked:opacity-100 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Products() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    document.title = "SabDecor | Products"
    window.scrollTo(0, 0)
  }, [])

  // Handle search input change (triggers on every keystroke)
  const handleSearchInputChange = (e) => {
    const searchVal = e.target.value.toLowerCase()
    setSearchInput(searchVal)
  }

  // Handle form submission (optional, but keeps the search button functional)
  const handleSearchSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block sticky top-24 self-start">
              <FilterSidebar searchInput={searchInput} />
            </div>
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search and Filter Bar */}
              <div className="bg-white rounded-2xl shadow-xl border border-violet-100 p-6 mb-8 sticky top-24 z-10">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  {/* Search */}
                  <form onSubmit={handleSearchSubmit} className="flex-1 flex">
                    <input
                      type="text"
                      id="search-input"
                      value={searchInput} // Bind input value to state
                      onChange={handleSearchInputChange} // Update state on change
                      className="flex-1 px-6 py-3 border-2 border-violet-200 rounded-l-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all"
                      placeholder="Search products..."
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-r-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200 flex items-center"
                    >
                      <FaSearch className="w-5 h-5" />
                    </button>
                  </form>
                  {/* Mobile Filter Button */}
                  <button
                    onClick={() => setIsMenuOpen(true)}
                    className="lg:hidden px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
                  >
                    <FaFilter />
                    <span>Filters</span>
                  </button>
                </div>
              </div>
              {/* Products List */}
              <ProductsList inputSearchValue={searchInput} />
            </div>
          </div>
          {/* Mobile Filter Modal */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}></div>
              <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">
                      Filters
                    </h2>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 hover:bg-violet-100 rounded-xl transition-colors"
                    >
                      <FaTimes className="w-5 h-5 text-violet-600" />
                    </button>
                  </div>
                  <FilterSidebar searchInput={searchInput} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Products
