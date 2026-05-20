function TaskCard({ task, updateStatus }) {

  return (

    <div className="bg-white shadow rounded p-4">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold"> {task.title}</h2>
          <p className="mt-2">{task.description}</p>
          <p className="text-sm text-gray-500 mt-2">Priority: {task.priority}</p>
          <p className="text-sm text-gray-500"> Assigned:{" "} {task.assignedTo?.name || "None"}</p>
        </div>
        <select value={task.status} onChange={(e)=> updateStatus( task._id, e.target.value)} className="border p-2 rounded h-fit">
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
      </div>
    </div>
  );
}

export default TaskCard;