import React, { useEffect, useState } from 'react'
import Card from '../components/homepage/Card'
import { Star, ThumbsUp } from 'lucide-react'

const Products = () => {
    const [active, setActive]= useState('/products')
    const [data, setData] = useState([])

    const products = async ()=>{
        try {
            const res = await fetch(`https://dummyjson.com${active}`)

            if(res.ok){
                const data = await res.json()
                console.log(data)
                if(data.users) setData(data.users)
                else if (data.products) setData(data.products)
                else if (data.comments) setData(data.comments)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        products()
    },[active])

  return (
    <div className='w-full h-full'>
        <div className='p-2 w-full flex items-center gap-5 text-xl font-bold cursor-pointer'>
                <p onClick={()=>setActive('/products')}>Products</p>
                <p onClick={()=>setActive('/users')}>Users</p>
                <p onClick={()=>setActive('/comments')}>Comments</p>
        </div>

        <div className='w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 p-3'>
            {
                data.map((item,index)=> (
                    <div key={index} className='relative group p-3 border rounded overflow-hidden'>

                        { active==='/users' && (
                            <>
                                <div>
                                    <p>Name: <span>{item.firstName}</span></p>
                                    <p>LastName: <span>{item.lastName}</span></p>
                                    <p>Email: <span>{item.email}</span></p>
                                </div>
                            </>
                            )
                            
                        }

                        { active==='/comments' && (
                            <>
                                <div>
                                    <div className='flex gap-3 items-center'>
                                        <p>{item.user?.fullName || 'No user FullName'}</p>
                                        <p className='text-zinc-300 text-sm'>{item.user?.username || "No username"}</p>
                                    </div>
                                    <p className='my-1'>Comment: <span>{item.body}</span></p>
                                    <span className='flex text-lg items-center gap-2 '><ThumbsUp className='size-5'/> {item.likes}</span>
                                </div>
                            </>
                            )
                            
                        }

                        { active==='/products' && (
                            <>
                                <div className='w-full flex items-center justify-center cursor-pointer'>
                                    <img className='size-70 ' src={item.images?.[0] || "No image"} alt="" />
                                </div>
                                <div className='transition-all duration-300 transform xl:translate-y-10 group-hover:translate-y-0'>
                                    <h2>{item.title}</h2>
                                    <p className='text-sm text-zinc-400 my-2'>{item.description}</p>
                                    <p className='text-sm my-1'>Stock : {item.stock}</p>
                                    <div className='flex gap-3 items-center'>
                                        <p>$ {item.price}</p>
                                        <p className='flex items-center gap-2'><Star className='size-4'/>{item.rating}</p>
                                        
                                    </div>
                                    <button className='cursor-pointer w-full p-2 border my-2 rounded-2xl xl:opacity-0 xl:translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 '>Add To Basket</button>
                                </div>
                            </>
                            )
                            
                        }

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products