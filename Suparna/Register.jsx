import React from 'react'

function Register(){
    return(
        <>
        <div className="flex">
            {/*First div*/}
            <div className="w-1/2 pt-16 bg-blue-500 ">
                <center><img src="logo.svg" alt="Logo" className="h-auto w-16 mb-2"></img>
                <p className="text-white mb-2 font-bold text-4xl">Fileit</p>
                <p className="text-white mb-2 font-bold text-3xl">Welcome!</p>
                <p className="text-gray-300">Create account and start sending files securely</p>
                <img src="group_3.svg" className="h-[448.5px] max-w-full "></img>
                 </center>
            </div>

            {/*Second div*/}
            <div className="w-1/2 p-8">
              <a href="#"><img src="icons8-back-arrow-60.png" className="h-10 w-14 px-4 py-2"></img></a>
              <center><p className="font-semibold pb-5 text-xl">Create account</p></center>

              <div className="mb-6">
                <input type="text" id="fname" placeholder="First Name" className="w-80 border border-gray-300 rounded-lg px-4 py-2 mr-16 h-12"/>
                <input type="text" id="lname" placeholder="Last Name" className="w-80 border border-gray-300 rounded-lg px-4 py-2 h-12"/>
              </div>

              <input type="text" id="num" placeholder="Phone-no" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 h-12"/>

              <input type="email" id="email" placeholder="E-mail" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 h-12"/>

              <input type="text" id="wallet_addr" placeholder="Wallet address" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 h-12"></input>

              <input type="password" id="pwd" placeholder="New Password" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 h-12"/>

              <input type="password" id="cpwd" placeholder="Confirm Password" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-14 h-12"/>

              <center><button className="bg-gray-800 text-white px-20 py-4 rounded-lg">Create account</button></center>
            </div>
        </div>
        
        </>
    )
}

export default Register
