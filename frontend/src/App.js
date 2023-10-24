import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterScreen from './Screen/RegisterScreen';
import LoginScreen from './Screen/LoginScreen';
import HomeScreen from './Screen/HomeScreen';


/** import all components */




/** auth middleware */
//import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
  {
    path : '/',
    element :<HomeScreen></HomeScreen>
},
    {
        path : '/register',
        element :<RegisterScreen></RegisterScreen>
    },
    {
      path : '/login',
      element :<LoginScreen></LoginScreen>
  },
  
    
   
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
