function ProjectCard({ project, navigate }) {

  return (
    <div className="bg-white shadow rounded p-4 cursor-pointer hover:shadow-lg transition" onClick={()=> navigate(`/project/${project._id}`)}>
      <h2 className="text-xl font-bold">{project.name}</h2>
      <p className="text-gray-500 mt-2"> Members: {project.members.length}</p>
    </div>
  );
}

export default ProjectCard;