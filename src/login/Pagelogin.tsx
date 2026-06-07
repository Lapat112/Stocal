import { useState } from "react";
import "./Css_login.css";

function Pagelogin() {
  const [inname, setInname] = useState("");
  const [inpassword, setInpassword] = useState("");

  async function llogin() {
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: inname,
        password: inpassword,
      }),
    });

    const data = await response.json();

    if (data.message === "Login Success") {
      alert("Login ผ่าน");
    } else {
      alert("Login ไม่ผ่าน");
    }
  }

  return (
    <>
      <main className="Main">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
         <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
          <form className="space-y-4"  onSubmit={(e) => {  e.preventDefault();  llogin(); }}>
            <div>
              <label className="block mb-2">Username</label>
              <input type="text" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder="Username"  onChange={(e) => setInname(e.target.value)} />
            </div>

            <div>
              <label className="block mb-2">Password</label>
              <input type="password"  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder="Password"   onChange={(e) => setInpassword(e.target.value)} />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"> Sign In </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Pagelogin;