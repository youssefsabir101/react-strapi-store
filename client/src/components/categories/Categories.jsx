import { useState, useEffect, useContext} from 'react';
import useFetch from '../../hooks/useFetch';
import StoreContext from '../../hooks/storeContext';
import { Link } from 'react-router-dom';
function Categories({category}) {  //   <===== had {category} mazal ma3raft chno dor dyalha tma hhhh

    //get data from api
    const [categories,setCategories] =useState([]);

    const {data, loading} = useFetch("/api/categories?populate=*");
    
    useEffect(()=>{
       data && setCategories(data)
    },[data])

    //use Store
    const {setFilter} = useContext(StoreContext)

    const handleFilterCategory = (e) =>{

      setFilter("http://localhost:1337/api/products?populate=*&filters[categories][id][$eq]="+e.target.dataset.category) //if choise one category



    }


  return (
    <>
    
    <div className="container py-8 mx-auto ">
    <h2 className="text-2xl font-medium text-gray-800 uppercase pl-4 mb-6">shop by category</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 px-4">
    { loading ? "Loading..." 
              : categories.map(category => (
                  <div key={category.id} className="relative overflow-hidden group max-sm:h-40 md:h-fit sm:h-fit h-60 rounded-md">
                    <img src={import.meta.env.VITE_API_URL + category.attributes.image.data.attributes.url}
                          alt="" className=" w-full " />
                    <Link to={"products"} onClick={handleFilterCategory} data-category={category.id}
                      className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl 
                      text-white font-roboto font-medium group-hover:bg-opacity-60 transition" >{category.attributes.title}</Link>
                  </div>
              ))
    }
    </div>
  </div>
  </>
  )
}

export default Categories