import React from 'react';

function ProfilePage() {
  
  return (
    <div className="flex h-screen">
       {/* Left section (40%) */}
       <div className="w-1/5 flex flex-col items-center bg-white px-4 py-8">
        <a href="/" className="flex items-center">
       
        <img src="Bluelock.svg" className="h-11 w-10 ml-2 bg-white" alt="Logo" /><br></br>
          <span className="text-2xl text-black hover:text-blue-700 ml-2">Fileit</span>
         
        </a> <br></br>
        <ul className="space-y-4">
          <li>
          <a href="/" className="flex items-center" hover:bg-gray-100>
         {/* <img width="31" height="31" src="https://img.icons8.com/fluency-systems-regular/48/home--v1.png" alt="home--v1"/>*/}
           <img src="icons8-home.svg" className='pl-1 h-7 hover:bg-gray-100'  alt="Home Icon" />
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
            <a href="#" className="text-2xl text-red-600 hover:text-red-400 pb-3 ml-2">Logout</a></a>
          </li>
        </ul>
      </div>

      {/* Right section (60%) */}
      <div className="w-4/5 flex flex-col px-8 py-8 bg-gray-200 ">
        
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-semibold">Account Settings</h1>
        </div>
        <a href="EditProfile.jsx"><button className="w-1/6 bg-gray-100 hover:bg-blue-100 text-black font-bold py-2 px-4 rounded mb-8">Edit Profile</button></a>
       <div className='flex flex-row justify-start py-4'><div className='flex flex-col justify-center items-center'> <img src="Screenshot 2024-02-22 151857.png" className='h-[100px] w-[100px] rounded-full' alt="Logout" /><h1>Change profile photo</h1></div></div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-semibold mb-1">Profile Name</h2>
          <p className="text-lg  mb-1">Suparna Kulkarni</p>

          <h2 className="text-2xl font-semibold mb-1">Phone Number</h2>
          <p className="text-lg  mb-1">9920067957</p>

          <h2 className="text-2xl font-semibold mb-1">Email</h2>
          <p className="text-lg  mb-1">suparnamk14@gmail.com</p>

          <h2 className="text-2xl font-semibold mb-1">Password</h2>
          <p className="text-lg  mb-1">*******</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
