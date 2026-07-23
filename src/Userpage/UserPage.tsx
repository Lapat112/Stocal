import React from "react";

function UserPage() {
  const username = localStorage.getItem("username");
  return (
    <div className="UserMain bg-white w-[113rem] h-[55rem] rounded-[25px] absolute top-[31rem] left-[51%] -translate-x-1/2 -translate-y-1/2 shadow-md p-6">

      {/* Profile Card */}
      <div>

        <div className="flex items-center gap-4 ">
          <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center text-white text-3xl"> U</div>
          <button className=" PoststoBT  bg-[#ffffff] w-[50px] h-[47px] rounded-[30px]  absolute left-[90vw] top-[41px]  flex items-center justify-center hover:bg-[#e4e4e4]  transition-all duration-300 ease-in-out"> 
          <img src="/src/Userpage/setting.png" alt="write" className="w-[30px] h-[30px]" /></button>






          <div>
           <h1 className="text-2xl font-semibold text-gray-800">{username}</h1>
            <p className="text-gray-500"> {username}@gmail.com </p>
          </div>
        </div>


       

        <div className="mt-3 w-full bg-amber-400 rounded-xl h-[46rem] ">แก้ไขโปรไฟล์</div>

      </div>

    </div>
  );
}

export default UserPage;