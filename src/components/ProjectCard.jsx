function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <div>
        <a href={project.link} target="_blank">Live</a>
        <a href={project.github} target="_blank">GitHub</a>
      </div>
    </div>
  );
}

export default ProjectCard;