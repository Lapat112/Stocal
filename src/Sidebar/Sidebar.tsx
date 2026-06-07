import { useState } from "react"
import {  Routes, Route, Link } from "react-router-dom"

import "./SIdebar.css"

function Sidebar() {
  return (
    <>
      <main className="Nav-container bg-[#EDEDED] w-[86px]  h-[74.8rem] relative">
   
      <Link to ={"/"}>
        <button className="bg-[#FFFFFF] w-[45px] h-[45px] border-1 border-[#313131] shadow-xl rounded-[10px] left-[1.10rem] top-[5rem] relative flex items-center justify-center"> 
          <img src="/src/Sidebar/STO.png" alt="write" className="w-[25px] h-[25px]" /></button>
      </Link>

          
       


      </main>
    
    </>
  )
}

export default Sidebar
