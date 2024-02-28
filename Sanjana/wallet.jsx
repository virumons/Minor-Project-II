import React from 'react';


function Wallet() {
  return (
    <div className="flex flex- h-screen">
      {/* Left section (40%) */}
      <div className="w-1/5 flex flex-col items-center bg-white px-4 py-8">
        <a href="/" className="flex items-center">
       
        <img src="Bluelock.svg" className="h-11 w-10 ml-2 bg-white" alt="Logo" /><br></br>
          <span className="text-2xl text-black hover:text-blue-700 ml-2">Fileit</span>
         
        </a> <br></br>
        <ul className="space-y-4">
          <li>
          <a href="/" className="flex items-center" hover:bg-gray-100>
          {/*<img width="31" height="31" src="https://img.icons8.com/fluency-systems-regular/48/home--v1.png" alt="home--v1"/>*/}
           <img src="icons8-home-48.png" className='pl-1 h-7 hover:bg-gray-100'  alt="Home Icon" />
            <a href="#" className="text-2xl text-black hover:text-blue-700 ml-2">Home</a></a>
          </li>
          <li>
          <a href="/" className="flex items-center" hover:bg-gray-100>
            <img src="icons8-customer-32.png" alt="Profile Icon" />
            <a href="#" className="text-2xl  hover:text-blue-700 ml-2">Profile</a></a>
          </li >
          <li>
          <a href="/" className="flex items-center" hover:bg-gray-100>
            <img src="icons8-wallet-50.png" className='h-8'  alt="Wallet Icon" />
            <a href="#" className="text-2xl text-black hover:text-blue-700 ml-2">Wallet</a></a>
          </li>
        </ul>

        <div className="mt-8" />

        <div className="mb-auto">
          
        </div>
<ul>
        <li className='hover:text-red-300 rounded mb-100'>
          <a href="/" className="flex items-center" hover:text-red-300>
            <img src="Screenshot 2024-02-22 151857.png" className='h-10 w-10 rounded-full mb-3 ' alt="Logout" />
            <a href="#" className="text-2xl text-red-600 hover:text-red-400 pb-3">Logout</a></a>
          </li>
        </ul>
      </div>
      <div className="pl-5 w-full flex flex-col justify-around items-end bg-gray-100 ">
        <table className= 'flex flex-row items-end border-collapse'>
        <div className="bg-[#f5e288] h-[300px] mr-10 pt-1 rounded-lg pb-12 px-2 py-2 mb-8 flex flex-col items-center justify-top">
      <tbody>
            {Array.from({ length: 2 }).map((_, index) => (
              <tr key={index}>
                <td className="px-4 py-2">Suparna Kulkarni</td>
                <td className="px-4 py-2">PDF</td>
                <td className="px-4 py-2">13-sept-2023</td>
                <td className="px-4 py-2">Sent</td>
                <td className="px-4 py-2">Private</td>
              </tr>
            ))}
          </tbody>
      </div>
        </table>
        {/*<h2 className="text-lg font-semibold flex flex-col ">Transfer History Last 2 Days</h2>*/}
        <table className="w-full table-auto border-collapse ">
          <thead>
            <ul>
              <li>
            <tr className='text-black font-semibold text-2xl pl-7'>Transfer History
            <div className='flex flex-col mr-10 justify-end'> <a href="/"><img src="icons8-delete-48.png" className='pl-1 h-7 hover:bg-gray-100 flex flex-col items-end justify-end'  alt="delete Icon" />  <a href="#" className="text-lg text-black hover:text-blue-700 m">Delete</a></a></div></tr></li></ul>

          
            <tr>
              
            
              <th className="px-4 py-2 text-left border-b border-gray-200">Name</th>
              <th className="px-4 py-2 text-left border-b border-gray-200">Type</th>
              <th className="px-4 py-2 text-left border-b border-gray-200">Date</th>
              <th className="px-4 py-2 text-left border-b border-gray-200">Action</th>
              <th className="px-4 py-2 text-left border-b border-gray-200">Visibility</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 2 }).map((_, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-2">Suparna Kulkarni</td>
                <td className="px-4 py-2">PDF</td>
                <td className="px-4 py-2">17-DEC-2023</td>
                <td className="px-4 py-2">Sent</td>
                <td className="px-4 py-2">Private</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<div className=' bg-gray-100 flex items-center flex justify-end'>
      
      </div>
     
      
    </div>
  );
}

export default Wallet;
