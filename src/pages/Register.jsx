import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Eye } from 'lucide-react';
import { EyeClosed } from 'lucide-react';

const Register = () => {
    const [visible, setVisible]=useState(false)
    const [page,setPage] = useState(1)
    const[user, setUser]= useState(null)

    const registerUser = async () =>{
    try {
        const res = await fetch('http://localhost:5001/api/auth/register', { // oz backend endpointimi yazdim
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })

        const data = await res.json()

        if(res.ok){
            setUser(data)
            toast.success("Registration successful!")
        }

    } catch (error) {
        console.log(error)
        toast.error("Server error")
    }
}

    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    });

    const userInput =(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }

    const validStep = ()=>{

        if(!formData.firstName){
            toast.error("Enter your first name!", { position: 'top-center', theme: "colored", limit: 1 } )
        }else if(!formData.lastName){
            toast.error("Enter your last name!", { position: 'top-center', theme: "colored", limit: 1 } )
        }else{
            toast.success('Step 1 completed',{ position: 'top-center', theme: "colored", limit: 1 })
            setPage(2)
        }
    }

    useEffect(()=>{
        console.log(user)
    }, [user])
  return (
    
    <div className="w-full h-screen  flex justify-center items-center  bg-[url('landscape.avif')] bg-cover bg-center select-none">
      <form className="w-105 shadow-xl p-5 flex flex-col backdrop-blur-xs text-white rounded-xl">
        <h2 className="text-center text-3xl font-semibold ">Register</h2>
        { page === 1?(
            <>
            <div className="flex flex-col gap-2 p-2 w-full my-2 text-lg">
                <label htmlFor="firstName">First Name</label>
                <input value={formData.firstName} onChange={userInput} placeholder="Enter your first name" className="border w-full px-3 py-2 border-zinc-300 rounded-lg outline-none transform ease-in-out duration-300 focus:shadow-lg bg-none active:bg-none" type="text" name="firstName" id="firstName" />
            </div>
            <div className="flex flex-col gap-2 p-2 w-full my-2 text-lg">
                <label htmlFor="lastName">Last Name</label>
                <input value={formData.lastName} onChange={userInput} placeholder="Enter your last name" className="border bg-none w-full px-3 py-2 border-zinc-300 rounded-lg outline-none transform ease-in-out duration-300 focus:shadow-lg " type="text" name="lastName" id="lastName" />
            </div>
            {/* <div className="flex flex-col gap-2 p-2 w-full my-2 text-lg">
                <label htmlFor="age">Age</label>
                <input value={formData.age} onChange={userInput} min={1} placeholder="Enter your age" className="border w-full px-3 py-2 border-zinc-300 rounded-lg outline-none transform ease-in-out duration-300 focus:shadow-lg bg-none" type="number" name="age" id="age" />
               
            </div> */}
            <div className="my-2 w-full p-2">
                <button onClick={validStep} type="button" className="w-full border rounded-lg py-2 focus:shadow-lg hover:bg-pink-200/50">Next Page</button>
            </div>
            </>
        ):(
            <>
            <div className="flex flex-col gap-2 p-2 w-full my-2 text-lg">
                <label htmlFor="email">Email</label>
                <input value={formData.email} onChange={userInput} placeholder="Enter your email" className="border bg-none w-full px-3 py-2 border-zinc-300 rounded-lg outline-none transform ease-in-out duration-300 focus:shadow-lg " type="email" name="email" id="email" />
            </div>
            <div className="relative flex flex-col gap-2 p-2 w-full my-2 text-lg">
                <label htmlFor="password">Password</label>
                <input value={formData.password} onChange={userInput} min={1} placeholder="Enter your password" className="border w-full px-3 py-2 border-zinc-300 rounded-lg outline-none transform ease-in-out duration-300 focus:shadow-lg bg-none" type={visible ? 'text':'password'} name="password" id="password" />
                <button type="button" onClick={()=>{
                    setVisible(prevState=> !prevState)
                }} className="absolute right-5 top-13">{visible ? <EyeClosed/>: <Eye/>}</button>
            </div>
            <div className="my-2 w-full p-2">
                <button onClick={(e)=>{
                    registerUser()
                    e.preventDefault()
                    toast.success("Registration successful!",{ position: 'top-center', theme: "colored", limit: 1 })
                    console.log(formData)
                }} type="button" className="w-full border rounded-lg py-2 focus:shadow-lg hover:bg-pink-200/50">Sign up</button>
            </div>
            </>
        )}
        <button type="button" className="my-2">
            Already have an account?
        </button>
      </form>
    </div>
  );
};

export default Register;
