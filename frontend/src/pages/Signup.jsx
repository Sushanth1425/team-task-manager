import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../utils/api";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({name: "", email: "", pwd: ""});
  const handleChange= (e)=> {setForm({...form, [e.target.name]: e.target.value,})}
  const handleSubmit= async (e)=> {
    e.preventDefault();
    try {
      await API.post("/auth/signup", form);
      toast.success("Signup successful");
      navigate("/");
    } catch (err){
      toast.error(err.response?.data?.message || "Signup failed")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>
        <input type="text" name="name" placeholder="Name" className="w-full border p-3 rounded mb-4"onChange={handleChange}required />
        <input type="email" name="email" placeholder="Email" className="w-full border p-3 rounded mb-4" onChange={handleChange} required/>
        <input type="password" name="pwd" placeholder="Password" className="w-full border p-3 rounded mb-4" onChange={handleChange} required />
        <button className="w-full bg-black text-white p-3 rounded"> Signup </button>
        <p className="text-center mt-4"> Already have account?{" "}
          <Link to="/" className="text-blue-500"> Login </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;