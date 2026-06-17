import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


import "./Getsto.css"

function Getsto() {

  const[search,setSearch] = useState('')
  const[getData,setGetdata] = useState([])
  const[showConfirm,setShowConfirm] = useState(false)
  const[selectedId,setSelectedId] = useState(null)

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

          setGetdata(
            getData.filter(item => item.Id !== id)
          )

          setShowConfirm(false)
          setSelectedId(null)

        })

        .catch(err => {
          console.log(err)
        })


    }

    function handleDeleteClick(id){
      setSelectedId(id)
      setShowConfirm(true)
    }

    function handleConfirmYes(){
      deletefood(selectedId)
    }

    function handleConfirmNo(){
      setShowConfirm(false)
      setSelectedId(null)
    }
  

 return (
    <>
      <main className='Main'>

       <h1 className='text-[23px] absolute left-[3rem] top-[2rem]'>Nutrition</h1> 

      <input type="text" placeholder="Search food"  className="Search-bar absolute text-center top-[10rem] left-[57.2rem] transform -translate-x-1/2 w-[50%] h-[2.5rem] bg-[#FFFFFF] border-[#767676] border-1 rounded-[50px]"
      onChange={(e)=>setSearch(e.target.value)}></input>
   
   
    {filterdata.map(item=>(
        <div key={item.Id} className="content bg-[FFFFFF] w-[92%] h-[5rem] left-[5.5rem] top-[15rem] border-[#aaaaaa] border-1 relative shadow-[0_4px_10px_rgba(0,0,0,0.5)] mb-5 rounded-[20px]" >

          <p className="text-[28px] absolute top-[19px] left-[5rem]">{item.Name}</p>

          <p className="text-[20px] absolute top-[28px] left-[87.5rem]"> Cal.</p>

          <p className="text-[28px] absolute top-[19px] left-[84rem]">{item.Cal} </p>

          <p className="text-[20px] absolute top-[28px] left-[96.5rem]"> G.</p>

          <p className="text-[28px] absolute top-[19px] left-[93rem]">{item.Gram}</p>

          <button onClick={() => handleDeleteClick(item.Id)} className="bg-[#ffffff] w-[45px] h-[45px] border-1 border-[#aaaaaa] shadow-xl rounded-[10px] absolute left-[99rem] top-[1.2rem]  flex items-center justify-center"> 
          <img src="/src/Getsto/recycle-bin.png" alt="write" className="w-[25px] h-[25px]" /></button>

        </div>
      ))} 


      <Link to={"Poststo"}>
         <button className="bg-[#FFFFFF] w-[45px] h-[45px] border-1 border-[#aaaaaa] shadow-xl rounded-[10px] absolute left-[107rem] top-[1.8rem]  flex items-center justify-center"> 
          <img src="/src/Sidebar/write.png" alt="write" className="w-[25px] h-[25px]" /></button>
      </Link>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-[10px] p-6 shadow-xl w-[300px] text-center">
            <p className="mb-4">ยืนยันการลบหรือไม่?</p>
            <div className="flex justify-center gap-4">
              <button onClick={handleConfirmYes} className="bg-red-500 text-white px-4 py-2 rounded-[8px]">Yes</button>
              <button onClick={handleConfirmNo} className="bg-gray-200 px-4 py-2 rounded-[8px]">No</button>
            </div>
          </div>
        </div>
      )}

        
      </main>


    

    </>

    
  )
}

export default Getsto