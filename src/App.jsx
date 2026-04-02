import React from 'react'
import Register from './pages/Register'
import { ToastContainer } from "react-toastify";
import NavBar from './components/common/NavBar';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import ForgotPassword from './pages/ForhotPassword';
import { useThemeStore } from './stores/themeStore';
import Products from './pages/Products';

const App = () => {
  const {isDarkModeOn, toggleDarkMode} = useThemeStore()
  return (
    <div className={`w-full h-full transition-all ease-in-out duration-300 ${isDarkModeOn? "bg-stone-900 text-white":"bg-white text-black"}`}>
        {/* <Register/> */}
        <NavBar/>
        <Products/>
        {/* <Homepage/> */}
        {/* <Login/> */}
        {/* <ForgotPassword/> */}
        <ToastContainer/>
    </div>
  )
}

export default App