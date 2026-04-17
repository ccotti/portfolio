import taskImage from "../assets/task-manager.png";

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <img src={taskImage} alt="Task Manager App" />
            <h3>Task Manager App</h3>
            <p>
              A React CRUD application that allows users to manage tasks with
              localStorage persistence.
            </p>

            <p className="tech">
              React • JavaScript • CSS
            </p>

            <div className="buttons">
              <a href="https://ccottiportfolio.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer">
                Live
              </a>
              <a href="https://github.com/ccotti/portfolio" 
              target="_blank" 
              rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;