import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../utils/api";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

function Dashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [stats, setStats] = useState({});
  const [name, setName] = useState("");
  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (err) {
      toast.error("Failed to load projects");
    }
  };

  const fetchStats = async () => {
    try {
      const res = await API.get("/dashboard");
      setStats(res.data);
    } catch (err) {
      toast.error("Failed to load stats");
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchStats();
  }, []);

  const createProject = async () => {
    if (!name) return;
    try {
      await API.post("/projects", {name});
      toast.success("Project created");
      setName("");
      fetchProjects();
    } catch (err) {
      toast.error("Failed to create project");
    }
  };

  

  return (
    <div className="p-6">
      <Navbar />
      <div className="  mb-8">
        <h1 className="text-3xl font-bold text-center">Dashboard</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white shadow rounded p-4">
          <h2>Total</h2>
          <p className="text-2xl font-bold"> {stats.total || 0} </p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2>Todo</h2>
          <p className="text-2xl font-bold">{stats.todo || 0}</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2>Progress</h2>
          <p className="text-2xl font-bold">{stats.progress || 0} </p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2>Done</h2>
          <p className="text-2xl font-bold">{stats.done || 0} </p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2>Overdue</h2>
          <p className="text-2xl font-bold">{stats.overdue || 0}</p>
        </div>
      </div>

      <div className="bg-white shadow rounded p-4 mb-8">
        <h2 className="text-xl font-bold mb-4"> Create Project </h2>
        <div className="flex gap-4">
          <input type="text" placeholder="Project Name" className="border p-2 rounded flex-1" value={name} onChange={(e)=>setName(e.target.value)} />
          <button onClick={createProject} className="bg-black text-white px-4 rounded" > Create </button>
        </div>
      </div>

      <p className="font-bold text-xl m-3">Projects</p>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project)=>( <ProjectCard  key={project._id} project={project} navigate={navigate} />))}
      </div>
    </div>
  );
}

export default Dashboard;