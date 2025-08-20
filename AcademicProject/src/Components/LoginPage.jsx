import React, { useState } from 'react'
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function SignupPage() {
  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSignup = (e) => {
    e.preventDefault();// Stops default form submission→page reload

    
    if (!formData.username || !formData.email || !formData.password) {
      alert("⚠ Please fill all fields");
      return;
    }

    console.log("Signup Data:", formData);

   
    alert("✅ Signup Successful!");

    
    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <div className='bg-[url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center w-full h-screen pt-20 flex justify-center items-center'>
      <div className='bg-white/20  rounded-2xl border-2 p-10 w-[90%] md:w-[40%]'>
        <h1 className='text-3xl md:text-4xl font-bold text-center text-black mb-8'>Sign Up</h1>

        
        <div className='flex items-center gap-4 mb-6'>
          <FaUserLarge size={22} className='text-black' />
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder='Enter Username'
            className='bg-amber-50 w-full h-10 px-3 rounded-[10px]'
          />
        </div>

       
        <div className='flex items-center gap-4 mb-6'>
          <MdEmail size={22} className='text-black' />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter Email'
            className='bg-amber-50 w-full h-10 px-3 rounded-[10px]'
          />
        </div>

        
        <div className='flex items-center gap-4 mb-6'>
          <RiLockPasswordFill size={22} className='text-black' />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter Password'
            className='bg-amber-50 w-full h-10 px-3 rounded-[10px]'
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer text-black"
          >
            {showPassword ? <IoEyeOffOutline size={22} /> : <IoEyeOutline size={22} />}
          </div>
        </div>

        
        <div className='flex items-center gap-2 mb-6'>
          <input type='checkbox' className='h-4 w-4' />
          <p className='text-white'>Remember Me</p>
        </div>

        
        <button
          onClick={handleSignup}
          className='bg-blue-500 text-white w-full h-10 rounded-[10px] hover:bg-blue-600 transition'>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default SignupPage