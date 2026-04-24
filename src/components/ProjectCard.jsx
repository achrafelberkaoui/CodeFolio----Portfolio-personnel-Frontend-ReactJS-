function ProjectCard({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 hover:scale-105 transition duration-300">

      <h2 className="text-gray-600">
        {title}
      </h2>

      <p className="text-gray-600">
        {description}
      </p>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        View
      </button>

    </div>
  );
}

export default ProjectCard;