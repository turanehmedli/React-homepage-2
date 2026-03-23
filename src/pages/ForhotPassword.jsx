import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  

  const userInput = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const validStep = () => {
    if (!formData.email) {
      toast.error("Enter your email!", {
        position: "top-center",
        theme: "colored",
        limit: 1,
      });
    } else {
      toast.success("Reset link sent!", {
        position: "top-center",
        theme: "colored",
        limit: 1,
      });
      console.log(formData);
    }
    
  };


  return (
    <div className="w-full h-screen  flex justify-center items-center  bg-[url('landscape.avif')] bg-cover bg-center select-none">
      <form className="w-105 shadow-xl p-5 flex flex-col backdrop-blur-xs text-white rounded-xl">
        <div className="flex flex-col gap-2 p-2 w-full my-2 text-lg">
          <label htmlFor="email">Email</label>
          <input
            value={formData.email}
            onChange={userInput}
            placeholder="Enter your email"
            className="border bg-none w-full px-3 py-2 border-zinc-300 rounded-lg outline-none transform ease-in-out duration-300 focus:shadow-lg "
            type="email"
            name="email"
            id="email"
          />
        </div>
        
        <div className="my-2 w-full p-2">
          <button
            onClick={()=>{
              validStep()
            }}
            type="button"
            className="w-full border rounded-lg py-2 focus:shadow-lg hover:bg-pink-200/50 cursor-pointer"
          >
            Send Reset Link
          </button>

          
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
