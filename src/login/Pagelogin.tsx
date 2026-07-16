import { useState } from "react";


function Pagelogin() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try {
      const loginRepos = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name,
          password: password
        })
      })

      const data = await loginRepos.json()
      if (data.message === "Login Success") {
        alert("yes")
      } else {
        alert("no")
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="w-screen h-screen bg-[#f7f7f7] flex justify-center items-center">
      
      <div className="bg-white w-[400px] p-8 rounded-2xl shadow-xl top-[14rem] absolute">

        <h1 className="text-3xl font-bold text-center mb-2">Login</h1>

        <p className="text-gray-500 text-center mb-8">to your account</p>

        <form className="flex flex-col gap-5">

          <div>
            <label className="font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 mt-2 outline-none focus:border-blue-500"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 mt-2 outline-none focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold duration-200"
            onClick={handleLogin}
          >
            Login
          </button>

        </form>


      </div>

    </div>
  );
}
export default Pagelogin;