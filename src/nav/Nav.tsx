import { useState } from "react"
import { Link } from 'react-router-dom'



import "./Nav.css"

function Nav() {
  return (
    <>
      <div className="Nav-container bg-[#f7f7f7] w-full h-[60px] relative">
        <text className="text-black text-[21px] top-[13px] left-[20px] absolute">Strocal</text>      
       
        <Link to = {'RegisPage'}>
          <button className="RegisterU bg-[#f7f7f7] hover:bg-[#e0e0e0]  transition-all duration-300 ease-in-out  w-[5rem] h-[2rem] text-[16px] absolute top-[7px] right-[105px] rounded-[10px]  cursor-pointer ">Sing up</button>  
        </Link>
        <Link to ={"Pagelogin"}>
          <button className="LoginU bg-[#f7f7f7] hover:bg-[#e0e0e0] transition-all duration-300 ease-in-out  w-[5rem] h-[2rem] text-[16px] absolute top-[7px] right-[20px] rounded-[10px] cursor-pointer">Login</button>   
        </Link>

      </div>
    
    </>
  )
}

export default Nav
