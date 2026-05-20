import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../utils/api";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [form, setForm]= useState({email: "", pwd: ""});
  const handleChange= (e)=> {setForm({...form, [e.target.name]: e.target.value})};
  const handleSubmit= async (e)=> {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed" );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6"> Team Task Manager</h1>
        <input type="email" name="email" placeholder="Email" className="w-full border p-3 rounded mb-4" onChange={handleChange} required/>
        <input type="password" name="pwd" placeholder="Password" className="w-full border p-3 rounded mb-4" onChange={handleChange} required/>
        <button className="w-full bg-black text-white p-3 rounded">Login</button>
        <p className="text-center mt-4"> No account?{" "}
          <Link to="/signup" className="text-blue-500" >Signup</Link>
       </p>
      </form>
    </div>
  );
}

export default Login;