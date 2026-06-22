import { useState } from "react"



import "./Nav.css"

function Nav() {
  return (
    <>
      <div className="Nav-container bg-[#f7f7f7] w-full h-[60px] relative">
        <text className="text-black text-[21px] top-[13px] left-[20px] absolute">Strocal</text>      
        <div  className="Post-button w-[3rem] h-[2rem] absolute top-[17px] left-[96.5%] text-[20px]  rounded-[10px] flex justify-center items-center  "></div>  
        <div></div>   
      </div>
    
    </>
  )
}

export default Nav
