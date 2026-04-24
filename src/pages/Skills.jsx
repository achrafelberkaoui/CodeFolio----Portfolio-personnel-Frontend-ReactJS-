function Skills() {
  const skills = ["React", "JavaScript", "Tailwind", "PHP", "Laravel"];

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Skills
      </h1>

      <div className="flex flex-wrap gap-4">

        {skills.map((s) => (
          <span
            className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full"
          >
            {s}
          </span>
        ))}

      </div>

    </div>
  );
}

export default Skills;