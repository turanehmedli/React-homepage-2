import { useEffect } from "react";
import { useParams } from "react-router"

const ProductsDetails = () => {
  const { id } = useParams();

  const getProductDetails = async () => {
    try {
        const res= await fetch(`https://dummyjson.com/products/${id}`)

        if(res.ok){
            const data = await res.json()
            console.log(data)
        }
    } catch (error) {
        console.error(error)
    }
  }

  useEffect(()=>{
    getProductDetails()
  },[])

  return (
    <div>
        {JSON.stringify(id)}
    </div>
  )
}

export default ProductsDetails