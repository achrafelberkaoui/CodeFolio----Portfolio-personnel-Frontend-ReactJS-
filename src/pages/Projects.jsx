import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      { id: 1, title: "Portfolio React", description: "Modern UI portfolio" },
      { id: 2, title: "SHMS Fullstack", description: "Fullstack app" },
      { id: 3, title: "G. courses", description: "CRUD system" },
    ]);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-10">

      <h1 className="text-3xl font-bold mb-8">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
          />
        ))}

      </div>

    </div>
  );
}

export default Projects;