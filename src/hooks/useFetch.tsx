import { useState, useEffect } from "react";
import axios from "../api/index";
export interface Product {
    id: number,
    title: string,
    images: string [],
    rating: number,
    brand: number,
    price: number,
    percentageCount: any,
    car: string,
    category: string,
    description: string
}

export const useFetch = (path:any, params:any, deps: any=[]) => {
    const [data, setData] = useState<Product[]>(null!)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState(null)

    useEffect(()=> {
        setLoading(true)
        axios
            .get(path, {params})
            .then(res => setData(res.data.products))
            .catch(err => setError(err))
            .finally(()=> setLoading(false))
    }, [...deps])

    return {data, loading, error}
} 