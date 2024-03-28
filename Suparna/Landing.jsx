import React from 'react'
import './App.css'
function Landing(){
  return(
    <>
     <div className="flex flex-col hero_section h-[100vh]">
      
      <div className="flex flex-row justify-between item-center px-8 py-6">
      <label className="flex flex-row justify-center items-center">
      <img src="whitelogo.svg" alt="Logo" className="h-auto"></img>
        <h1 className="font-semibold text-xl mt-2 ml-2">Fileit</h1>
        </label>
        <button className="bg-blue-500 text-white font-semibold px-16 py-3 rounded-lg">Login</button>
      </div>
      
      
      <div className="px-12">
      <p className="font-semibold text-blue-500 text-8xl mt-20">Securely</p>
      <p className="font-semibold text-7xl mr-11">Send files</p>
      <p className="mt-2 font-semibold">Fileit Business is a secure file sharing and storage solution <br/> that employees love and IT admins trust.</p>
      <button className="bg-blue-500 text-white font-semibold px-16 py-3 rounded-lg mt-5">Get started</button>
      </div>
    
    </div>
    </>
  )
}

export default Landing
