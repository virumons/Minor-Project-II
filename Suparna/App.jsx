import React from 'react'

function App(){
  return (
    <>
    <div className="flex">
      {/*First Div*/}
    <div className="w-1/2 p-8 bg-blue-500">
      <center><img src="logo.svg" alt="Logo" className="h-auto w-16 mb-4"></img>
      <p className="text-white mb-2 font-bold text-4xl">Fileit</p>
      <p className="text-white font-bold text-3xl">Welcome!</p>
      <p className="text-gray-300">Login and start sending files</p></center>
      <img src="manill.svg" className="h-[448.5px] max-w-full pt-5 ml-28"/>
    </div>

    {/*second div*/}
    <div className="w-1/2 p-8">
    <a href="#"><img src="icons8-back-arrow-60.png" className="h-10 w-14 px-4 py-2"></img></a>
      <center><p className="font-semibold pt-12 pb-5 text-xl">Login</p></center>

      <div className="mb-4">
        <input type="email" id="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-2"></input>
        </div>

        <div className="mb-6">
        <input type="password" id="password" placeholder="Password" className="w-full border border-gray 300 rounded-lg px-4 py-2"></input>
      </div>

      <p className="text-right text-bold text-sm"><a href="#">Forgot password?</a></p><br/><br/><br/>
      
      <center><button className="bg-gray-800 text-white px-12 py-1.5 rounded-lg">Login</button></center>
    
     </div>
    </div>
    
  
   </>
  )
}

export default App
        
