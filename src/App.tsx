import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Outlet } from 'react-router-dom'




import Nav from './nav/Nav'

import Sidebar from './Sidebar/Sidebar'

import Pagelogin from './login/Pagelogin'

import './App.css'



function App() {
 



  return (
    <>
      <Nav/>
      <Sidebar/> 
    
      <Outlet/>
    
    </>
  )
}

export default App
