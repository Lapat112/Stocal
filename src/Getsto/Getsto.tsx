import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


import "./Getsto.css"

function Getsto() {

  const[search,setSearch] = useState('')
  const[getData,setGetdata] = useState([])

  useEffect(() =>{
    fetch("http://127.0.0.1:8000/calorie")
    .then(res => res.json())
    .then(data => {setGetdata(data)})
  },[])

    const filterdata = getData.filter(imin => imin.Name.toLowerCase().includes(search.toLowerCase()))




    function deletefood(id){
      fetch(`http://127.0.0.1:8000/item/${id}`,{
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {

          console.log(data)

          alert("Delete success")
          window.location.reload()

          setGetdata(
            getData.filter(item => item.id !== id)
          )

        })

        .catch(err => {
          console.log(err)
        })


    }
  

 return (
    <>
      <main className='MainGet'>

       <h1 className='text-[23px] absolute left-[3rem] top-[2rem]'>Nutrition</h1> 

      <input type="text" placeholder="Search food"  className="Search-bar absolute text-center top-[10rem] left-[57.2rem] transform -translate-x-1/2 w-[50%] h-[2.5rem] bg-[#FFFFFF] border-[#767676] border-1 rounded-[50px]"
      onChange={(e)=>setSearch(e.target.value)}></input>
   
   
    {filterdata.map(item=>(
        <div key={item.Id} className="content bg-[FFFFFF] w-[92%] h-[5rem] left-[5.5rem] top-[15rem] border-[#aaaaaa] border-1 relative shadow-[0_4px_10px_rgba(0,0,0,0.5)] mb-5 rounded-[20px]" >
          <p className="text-[28px] absolute top-[19px] left-[5rem]">{item.Name}</p>
          
          <div className='barcomman  w-[30%] h-[4rem] absolute right-0'>
            
            <p className="text-[20px] absolute top-[28px] left-[10rem]"> Cal.</p>

            <p className="text-[28px] relative top-[19px] left-[6rem]">{item.Cal} </p>

            <p className="text-[20px] absolute top-[28px] left-[20rem]"> G.</p>

            <p className="text-[28px] absolute top-[19px] left-[16rem]">{item.Gram}</p>

            <button className="bg-[#ffffff] w-[45px] h-[45px] border-1 border-[#aaaaaa] shadow-xl rounded-[10px] absolute left-[23.5rem] top-[1.2rem] absolute  flex items-center justify-center"> 
            <img src="/src/Getsto/recycle-bin.png" alt="write" className="w-[25px] h-[25px]" onClick={() =>deletefood(item.Id)}/></button>
          </div>
        </div>
      ))} 


      <Link to={"Poststo"}>
         <button className=" PoststoBT  bg-[#FFFFFF] w-[43px] h-[47px] border-1 border-[#b9b9b9]  rounded-[10px]  absolute left-[90vw] top-[1.8rem]  flex items-center justify-center"> 
          <img src="/src/Sidebar/write.png" alt="write" className="w-[24px] h-[24px]" /></button>
      </Link>

        
      </main>


    

    </>

    
  )
}

export default Getsto










































