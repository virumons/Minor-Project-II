import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Landing.jsx'
import Login from './Login/Login.jsx'
import Register from './Register/Register.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router =createBrowserRouter([
  {
    path:'/',
    element:<App />,
  },
  {
    path:'/Register',
    element: <Register />,
  },
  {
    path:"/Login",
    element:<Login />,
  },
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
