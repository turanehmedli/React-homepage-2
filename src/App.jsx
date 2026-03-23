import React from 'react'
import Register from './pages/Register'
import { ToastContainer } from "react-toastify";
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import ForgotPassword from './pages/ForhotPassword';

const App = () => {
  return (
    <div>
        {/* <Register/> */}
        {/* <Homepage/> */}
        {/* <Login/> */}
        <ForgotPassword/>
        <ToastContainer/>
    </div>
  )
}

export default App