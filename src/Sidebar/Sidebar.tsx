import { useState } from "react"
import {  Routes, Route, Link } from "react-router-dom"

import "./SIdebar.css"

function Sidebar() {
  return (
    <>
      <main className="Nav-container bg-[#f7f7f7] w-[86px]  h-[74.8rem] relative">
   
      <Link to ={"/"}>
        <button title="Calori" className="bg-[#f7f7f7] w-[45px] h-[45px] left-[1.10rem] top-[5rem] relative flex items-center justify-center hover:bg-[#e7e7e7] transition-colors duration-200 rounded-lg">
          <img src="/src/Sidebar/STO.png" alt="write" className="w-[28px] h-[30px]" /></button>
      </Link>

          
       


      </main>
    
    </>
  )
}

export default Sidebar
