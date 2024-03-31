import React from 'react'
import register from './assets/register.svg';
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';
function Register(){
    return(
        <>
        <div className="flex h-[100vh]">
            {/*First div*/}
            <div className="w-1/2  bg-blue-500 flex flex-col justify-between items-center">
                <div className='flex flex-col justify-center items-center mt-5'>
                <img src={logo} alt="Logo" className="h-auto w-16 mb-2"></img>
                <p className="text-white mb-2 font-bold text-4xl">Fileit</p>
                <p className="text-white mb-2 font-bold text-3xl">Welcome!</p>
                <p className="text-gray-300">Create account and start sending files securely</p>
                </div>
                <img src={register} className="h-[400px] max-w-full "></img>
            </div>

            {/*Second div*/}
            <Link to="/" > <img width="40" height="40" className='ml-[20px] mt-[20px]' src="https://img.icons8.com/ios/50/left--v1.png" alt="left--v1"/></Link>
            <div className="w-1/2 p-4 flex flex-col justify-center items-center ">
             
              <p className="font-semibold  text-xl">Create account</p>

              <div >
                <input type="text" id="fname" placeholder="First Name" className=" border border-gray-300 rounded-lg px-4 py-2  m-2  h-12 "/>
        
                <input type="text" id="lname" placeholder="Last Name" className=" border border-gray-300 rounded-lg px-4 py-2 m-2 h-12 "/>
              
              <div className='flex flex-col '>
              <input type="text" id="num" placeholder="Phone-no" className=" border border-gray-300 rounded-lg px-4 py-2 m-2  h-12"/>

              <input type="email" id="email" placeholder="E-mail" className=" border border-gray-300 rounded-lg px-4 py-2  m-2 h-12"/>

              <input type="text" id="wallet_addr" placeholder="Wallet address" className=" border border-gray-300 rounded-lg px-4 py-2 m-2 h-12"></input>

              <input type="password" id="pwd" placeholder="New Password" className=" border border-gray-300 rounded-lg px-4 py-2 m-2 h-12"/>

              <input type="password" id="cpwd" placeholder="Confirm Password" className=" border border-gray-300 rounded-lg px-4 py-2 m-2 h-12"/>
              </div>
              <button className="bg-gray-800 text-white w-full py-2 rounded-lg">Create account</button>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Register
