import React, { useState,useEffect } from 'react'


import "./Poststo.css"


function Poststo() {

  const[namefood,setNamefood] = useState("")
  const[calorie,setCalorie] = useState("")
  const[gram,setgram] = useState("")
  const[cooldown,setCooldown]=useState(true)


function addFood(){
 fetch("http://127.0.0.1:8000/item/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
     Name: namefood,
     Cal: calorie,
     Gram: gram
  })
})
.then(res => res.json())
.then(data => {console.log(data); alert("Add sucessfull")})




}

 return (
    <>
      <main className='MainPost'>
          <h1 className='text-[23px] absolute left-[3rem] top-[2rem]'>CreateMeal</h1> 

           <div className="content bg-[FFFFFF] w-[92%] h-[8rem] left-[5.5rem] top-[9rem] border-[#aaaaaa] border-1 relative shadow-[0_4px_10px_rgba(0,0,0,0.5)] mb-5 rounded-[20px]" >

            <input type="text" placeholder="Name"  className="Search-bar absolute text-center top-[31px] left-[3rem] w-[18rem] h-[4rem] bg-[#FFFFFF] border-[#161616] border-1 rounded-[20px]"
            onChange={(e)=>setNamefood(e.target.value)}></input>

             <input type="number" placeholder="Calorie"  className="Search-bar absolute text-center top-[31px] left-[57rem] w-[15rem] h-[4rem] bg-[#FFFFFF] border-[#161616] border-1 rounded-[20px]"
             onChange={(e)=>setCalorie(e.target.value)}></input>
             <p className='text-[25px] absolute left-[74rem] top-[2.9rem]'>Cal.</p> 
            
             <input type="number"  placeholder="Gram"  className="Search-bar absolute text-center top-[31px] left-[80rem] w-[15rem] h-[4rem] bg-[#FFFFFF] border-[#161616] border-1 rounded-[20px]"
             onChange={(e)=>setgram(e.target.value)}></input> 
              <p className='text-[25px] absolute left-[97rem] top-[2.9rem]'>G.</p> 
            </div>


              <button className="bg-[#FF2C2C] w-[13rem] h-[60px] border-1 border-[#ffffff] rounded-[20px] absolute left-[92rem] top-[21rem]  flex items-center justify-center text-amber-50"
              onClick={addFood}>ADD</button> 


      </main>

    </>

    
  )
}

export default Poststo

