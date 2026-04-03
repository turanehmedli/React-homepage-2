import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Eye } from "lucide-react";
import { EyeClosed } from "lucide-react";
import { useAuthStore } from "../stores/authStoreg";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const {setAccessToken, setRefreshToken} = useAuthStore();

  const loginUser = async () => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "emilys",
          password: "emilyspass",
          expiresInMins: 30, // optional, defaults to 60
        }),
         // Include cookies (e.g., accessToken) in the request
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setAccessToken(data.accessToke);
        setRefreshToken(data.refreshToken);
        navigate('/')
      }
    } catch (error) {
      console.error(error);
    }
  };

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
    } else if (!formData.password) {
      toast.error("Enter your password!", {
        position: "top-center",
        theme: "colored",
        limit: 1,
      });
    } else {
      toast.success("Login successful!", {
        position: "top-center",
        theme: "colored",
        limit: 1,
      });
      console.log(formData);
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);
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
        <div className="relative flex flex-col gap-2 p-2 w-full my-2 text-lg">
          <label htmlFor="password">Password</label>
          <input
            value={formData.password}
            onChange={userInput}
            min={1}
            placeholder="Enter your password"
            className="border w-full px-3 py-2 border-zinc-300 rounded-lg outline-none transform ease-in-out duration-300 focus:shadow-lg bg-none"
            type={visible ? "text" : "password"}
            name="password"
            id="password"
          />
          <button
            type="button"
            onClick={() => {
              setVisible((prevState) => !prevState);
            }}
            className="absolute right-5 top-13"
          >
            {visible ? <EyeClosed /> : <Eye />}
          </button>
        </div>
        <div className="my-2 w-full p-2">
          <button
            onClick={() => {
              loginUser();
              validStep();
            }}
            type="button"
            className="w-full border rounded-lg py-2 focus:shadow-lg hover:bg-pink-200/50 cursor-pointer"
          >
            Sign up
          </button>

          <button
            type="button"
            className="w-full rounded-lg py-2 focus:shadow-lg my-2 cursor-pointer"
          >
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
