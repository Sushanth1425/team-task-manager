import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../utils/api";
import TaskCard from "../components/TaskCard";

function ProjectPage() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({title: "", description: "", dueDate: "", priority: "Medium", assignedTo: ""});
  const [project, setProject] = useState(null)
  const fetchTasks= async ()=> {
    try {
      const res = await API.get(`/tasks?projectId=${id}`);
      setTasks(res.data);
    } catch (err) {
      toast.error("Failed to load tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchProject()
  }, []);

  const addMember = async () => {
    try {
      await API.post(`/projects/${id}/members`, {email});
      toast.success("Member added");
      setEmail("");
    } catch (err){
      toast.error(err.response?.data?.message);
    }
  };

  const createTask = async () => {
    try {
      await API.post("/tasks", {...form, project: id});
      toast.success("Task created");
      fetchTasks();
    } catch (err) {
      toast.error( err.response?.data?.message);
    }
  };

  const updateStatus= async (taskId, status)=> {
    try {
      await API.put(`/tasks/${taskId}`, {status});
      fetchTasks();
    } catch (err) {
      toast.error("Failed to update");
    }
  };

  const fetchProject = async ()=> {
  try {
    const res = await API.get("/projects")
    const current = res.data.find(p => p._id === id)
    setProject(current)
  } catch(err){
    console.log(err)
  }
}

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8"> Project Tasks</h1>
      <div className="bg-white shadow rounded p-4 mb-8">
        <h2 className="text-xl font-bold mb-4">Add Member</h2>
        <div className="flex gap-4">
          <input type="email" placeholder="Member Email" className="border p-2 rounded flex-1" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <button onClick={addMember} className="bg-black text-white px-4 rounded"> Add</button>
        </div>
      </div>
      <div className="bg-white shadow rounded p-4 mb-8">
        <h2 className="text-xl font-bold mb-4"> Create Task </h2>
        <div className="grid gap-4">
          <input type="text" placeholder="Title" className="border p-2 rounded" onChange={(e)=> setForm({...form, title:e.target.value})}/>
          <textarea placeholder="Description" className="border p-2 rounded" onChange={(e)=> setForm({...form, description:e.target.value})} />
          <input type="date" className="border p-2 rounded" onChange={(e)=> setForm({...form,dueDate:e.target.value})} />
          <select className="border p-2 rounded" onChange={(e)=>setForm({...form, priority:e.target.value})}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <select className="border p-2 rounded" onChange={(e)=> setForm({...form, assignedTo:e.target.value})}>
            <option value="">Select Member</option>
            {project?.members?.map((member)=>(<option key={member._id} value={member._id} >{member.name} ({member.email})</option>))}
          </select>
          <button onClick={createTask} className="bg-black text-white p-3 rounded" > Create Task </button>
        </div>
      </div>

      <div className="grid gap-4">
        {tasks.map((task)=>( <TaskCard key={task._id} task={task} updateStatus={updateStatus} />))}
      </div>

    </div>
  );
}

export default ProjectPage;