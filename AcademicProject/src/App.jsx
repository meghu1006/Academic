import { useState } from 'react'
import './App.css'
import AdminDashboad from './Components/AdminDashboad'
import AdLogin from './Components/AdLogin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './Components/Admin'
import Dasboard from './Components/Dasboard'
import Usermang from './Components/Usermang'
import LoginPage from './Components/LoginPage'
import Studentcource from './Components/Studentcource'
import About from './Components/About'
import RegisterPage from './Components/RegisterPage'
import Home from './Components/Home'
import ContactUs from './Components/Contact'
import BCOM from './Components/BCOM'
import Resources from './Components/Resources'
import Navbar from './Components/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Studentcource />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
         <Route path="/resources" element={<Resources />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/bcom" element={<BCOM />} />
        <Route path="/AdminDash" element={<AdminDashboad />} />
        <Route path="/admin-login" element={<AdLogin />} />
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/Dashboard" element={<Dasboard />}></Route>
        <Route path="/User Management" element={<Usermang />}></Route>



      </Routes>
    </BrowserRouter>
  )
}

export default App
