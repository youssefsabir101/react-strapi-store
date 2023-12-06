import { useEffect, useState } from "react"
import { fetchApi } from "./fetchApi"

const useFetch =(endPoint) =>{
    const [data, setData] = useState(null);
    //test if that hook loading
    const [loading, setLoading] = useState(false)
    //errors
    const [errors, setError] = useState(false)
    useEffect(()=>{
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetchApi.get(endPoint)
                setData(res.data.data)
            } catch (error) {
                setError(errors)
            }
            setLoading(false)
        }
        
        fetchData()
    },[endPoint])

    return {data, loading, errors}
}
export default useFetch