import React from 'react';
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const userDataString = localStorage.getItem('userData');
  const navigate = useNavigate();
  if (userDataString==='undefined' || userDataString===null) {
    return (
      <div className="min-h-screen  items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
         Dashboard
        </h1>
        <p> UserData Not Found</p>
      </div>
    );
  }
  const userData = JSON.parse(userDataString);
  console.log(userData.name)
  console.log(userData.email)
  
  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');
    navigate("/signin");
  };
  return (
    <div className="min-h-screen  items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 pt-6">Dashboard</h1>
      <button id='logout-link' onClick={handleLogout} className='m-6 text-white px-4 bg-gray-700 hover:bg-gray-800text-white font-semibold py-2  rounded-md focus:outline-none focus:shadow-outline-gray '>Logout</button>
      <h2 id='name' className="text-xl  text-center text-gray-800 mb-8">{userData.name}</h2>
      <p id='email ID'className="text-xl  text-center text-gray-800 mb-8">{userData.email}</p>
      
    </div>
    
  );
}

export default Dashboard;