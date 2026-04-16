import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Task Manager App",
      desc: "CRUD app with local storage",
      link: "#",
      github: "#"
    },
    {
      title: "Weather App",
      desc: "API-based weather app",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;