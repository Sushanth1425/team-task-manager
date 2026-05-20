import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-black text-white p-4 items-center flex justify-between">
      <h1 className="font-bold">Team Task Manager</h1>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout </button>
    </div>
  );
}

export default Navbar;