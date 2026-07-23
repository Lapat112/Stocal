import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Nav.css";

function Nav() {
  const username = localStorage.getItem("username");

  const [showinfo, setShowinfo] = useState(false);

  const navigate = useNavigate();

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target)
      ) {
        setShowinfo(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener( "mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="Nav-container bg-[#ffffff] w-full h-[60px] relative">

        <h1 className="text-black text-[21px] top-[13px] left-[20px] absolute"> Strocal </h1>

        {username ? (
          <div  ref={menuRef} className="absolute right-[30px] top-[7px]" >
            <button className="Userin bg-[#f3f3f3] w-[6rem] h-[2rem] rounded-[10px] flex justify-center items-center cursor-pointer hover:bg-[#bdbdbd] transition-all duration-300"onClick={() => setShowinfo(!showinfo)}> {username}</button>
            {showinfo && (
              <div className="absolute right-0 top-[45px] bg-[#ffffff] shadow-lg rounded-xl w-[150px] p-2 z-50">

                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={() => navigate("/UserPage")}> Profile </button>

                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"onClick={handleLogout}> Logout</button>

              </div>
            )}
          </div>
        ) : (
          <div className="LandR  w-[12.5rem] h-[3rem] absolute right-[30px]">

            <Link to="RegisPage">
              <button className="RegisterU bg-[#f7f7f7] hover:bg-[#e0e0e0] transition-all duration-300 ease-in-out w-[5rem] h-[2rem] text-[16px] absolute top-[7px] right-[105px] rounded-[10px] cursor-pointer">Sign up</button>
            </Link>

            <Link to="Pagelogin">
              <button className="LoginU bg-[#f7f7f7] hover:bg-[#e0e0e0] transition-all duration-300 ease-in-out w-[5rem] h-[2rem] text-[16px] absolute top-[7px] right-[20px] rounded-[10px] cursor-pointer"> Login </button>
            </Link>

          </div>
        )}

      </div>
    </>
  );
}

export default Nav;