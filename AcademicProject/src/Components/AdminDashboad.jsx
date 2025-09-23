import React from 'react'
import { useNavigate } from "react-router-dom";


function AdminDashboad() {
  
  alert("Welcome to AdminDashboard")
  const navigate=useNavigate();
  
   function btn()
   {
     navigate("/Admin-login")
   }
  return (
    <div className=' h-[1000px] w-full bg-[url("https://thumbs.dreamstime.com/b/down-syndrome-man-attending-education-class-community-center-inclusivity-disabled-person-218913505.jpg")] bg-no-repeat bg-cover '> 
      <div className='text-white text-2xl font-bold p-24 '>
        STUDENT COMMUNITY DEVELOPMENT
        <div className='p-10 '>
         ADMIN DASHBOARD
      </div> 
      </div>
      <div> 
          <button
            type="submit"
            className="w-72 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 " onClick={btn} >Login
          </button>
      </div>
      
      
          
    </div>
  )
}

export default AdminDashboad
