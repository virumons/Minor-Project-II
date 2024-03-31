import React from 'react'
import  { Link } from "react-router-dom";
import loginback from "./assets/loginback.svg";
import logo from "./assets/logo.svg";

function App(){
  return (
    <>
    <div className="flex h-[100vh]">
      {/*First Div*/}
    <div className="w-1/2  bg-blue-500 flex flex-col justify-between items-center">
      <div className='flex flex-col justify-center items-center mt-4'>
      <img src={logo} alt="Logo" className="h-[60px] "></img>
      <p className="text-white  font-bold text-4xl">Fileit</p>
      <p className="text-white font-bold text-3xl">Welcome back!</p>
      <p className="text-gray-300">Login and start sharing files</p>
      </div>
      <img src={loginback} className="h-[448.5px] max-w-full "/>
    </div>

    {/*second div*/}
    <Link to="/" > <img width="40" height="40" className='ml-[20px] mt-[20px]' src="https://img.icons8.com/ios/50/left--v1.png" alt="left--v1"/></Link>
    <div className="w-1/2 p-4 flex flex-col justify-center items-center">
    
      <p className="font-semibold text-xl">Login</p>

      <div className='flex flex-col w-[80%]' >
        <input type="email" id="email" placeholder="Email" className=" border border-gray-300 rounded-lg px-4 py-2 m-2"></input>
        
        <input type="password" id="password" placeholder="Password" className=" border border-gray 300 rounded-lg px-4 m-2 py-2"></input>
        <button className="bg-gray-800 text-white w-full px-0 py-2 rounded-lg">Login</button>
    
      </div>
    
     </div>
    </div>
    
  
   </>
  )
}

export default App
        
