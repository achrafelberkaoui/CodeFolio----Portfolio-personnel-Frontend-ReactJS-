import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Home() {
  const user = useContext(UserContext);
  
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">

      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm <span className="text-blue-500">{user}</span>
      </h1>

      <p className="text-gray-600 text-lg mb-6">
        Frontend Developer React JS 🚀
      </p>

      <a
        href="/projects"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        View My Work
      </a>

    </div>
  );
}

export default Home;