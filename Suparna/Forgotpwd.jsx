import React from 'react'

function Forgotpwd(){
  return(
  <>
  <div className="absolute flex flex-row items-center justify-center h-[100vh] w-[100%]">
   <div className="w-full p-6 bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
    <h1 className="text-2xl font-semibold text-white text-center">Forgot Password?</h1>
    <p className="font-light text-gray-400 text-sm mb-6">Don't worry! Just type in your mobile number and we will send you the OTP to reset your password.</p>

    <div className="mb-6">
     <label className="text-white"> Mobile Number </label>
      <input type="text" id="num" className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"></input>
     <center><button className="bg-blue-500 text-white w-full px-16 py-2 rounded-lg mt-6">Send OTP</button></center>
     </div>
     </div>

     <div className="absolute hidden items-center justify-center px-6 py-10">
      <div className="w-full p-6 bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700 h-64">
        <h1 className="text-2xl font-semibold text-white text-center mb-4">Verify OTP</h1>
        <label className="text-white">Enter OTP</label>
        <input type="text" id="num" className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"></input>
        <center><button className="bg-blue-500 text-white w-full px-16 py-2 rounded-lg mt-6">Verify</button></center>
      </div>
     </div>

     <div className="absolute hidden  items-center justify-center px-6 py-10">
      <div className="w-full p-6 bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700 h-80">
        <h1 className="text-2xl font-semibold text-white text-center mb-4">Change Password</h1>
        <label className="text-white">New password</label>
        <input type="password" id="newpwd" className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 mb-4"></input>
        
        <label className="text-white">Confirm Password</label>
        <input type="password" id="confpwd" className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"></input>

        <center><button className="bg-blue-500 text-white w-full px-16 py-2 rounded-lg mt-6">Confirm</button></center>
      </div>
      </div>  
      </div>
  
  
  </>
  )
}

export default Forgotpwd
