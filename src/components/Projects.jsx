import TaskManager from "./TaskManager";

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Task Manager App</h3>
          <p>React CRUD app with local storage.</p>
          <TaskManager />
        </div>
      </div>
    </section>
  );
}

export default Projects;