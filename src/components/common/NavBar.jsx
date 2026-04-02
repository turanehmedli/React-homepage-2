import { useThemeStore } from "../../stores/themeStore";
import { Moon,Sun } from "lucide-react";

//?https://dummyjson.com/comments
//!https://dummyjson.com/products
//*https://dummyjson.com/users
 
const NavBar = () => {
  const { isDarkModeOn, toggleDarkMode } = useThemeStore();

  return (
    <div className="w-full p-3 flex justify-between  border-b border-zinc-400">
        <h1 className="text-2xl font-black">App</h1>

      <div className="flex items-center gap-2">
        <p>DarkMode:</p>
        <button
          onClick={toggleDarkMode}
          className={`flex w-15 h-7 border px-1 items-center border-zinc-400 rounded-full cursor-pointer`}
        >
          <div
            className={`flex justify-center items-center size-5 rounded-full transform translate-all duration-300 ${isDarkModeOn ? "bg-zinc-300 " : "bg-stone-900"} ${isDarkModeOn ? "translate-x-8 rotate-90" : "translate-x-0"}`}
          >
            {isDarkModeOn?<Sun className="size-3 text-black"/> :<Moon className="size-3 text-white"/>}
          </div>
        </button>
      </div>


    </div>
  );
};

export default NavBar;
