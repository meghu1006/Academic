import { useState } from 'react'
import './App.css'
import AdminDashboad from './Components/AdminDashboad'
import AdLogin from './Components/AdLogin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './Components/Admin'
import Dasboard from './Components/Dasboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboad />} />
        <Route path="/admin-login" element={<AdLogin />} />
       <Route path="/Admin" element={<Admin/>}></Route>
        <Route path="/Dashboard" element={<Dasboard/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
