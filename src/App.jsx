import { useEffect } from 'react'
import Register from './pages/Register'
import { ToastContainer } from "react-toastify";
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import ForgotPassword from './pages/ForhotPassword';
import { useThemeStore } from './stores/themeStore';
import { useAuthStore } from './stores/authStoreg';
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from './pages/NotFound';
import Navbar from './components/common/NavBar';

const App = () => {
  const navigate = useNavigate()

  const { accessToken } = useAuthStore()
  const {isDarkModeOn} = useThemeStore()

  useEffect(() => {
    if (!accessToken) {
      navigate('/login')
    }else{
      navigate('/')
    }
  }, [accessToken, navigate])

  return (
    <div className={`w-full h-full transition-all ease-in-out duration-300 ${isDarkModeOn ? "bg-stone-900 text-white" : "bg-white text-black"}`}>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        {accessToken && <>
          <Route path='/' element={<Homepage />} />
          <Route path='/products/:id' element={<ProductsDetails />} />
        </>}
        <Route path='/register' element={<Register />} />
        
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App