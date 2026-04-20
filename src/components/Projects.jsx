function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">
            <div className="image-wrapper">
              <img src="/task-manager.png" alt="Task Manager" />
            </div>

            <div className="card-content">
              <h3>Task Manager App</h3>

              <p>
                A React CRUD application that allows users to manage tasks with
                localStorage persistence.
              </p>

              <p className="tech">
                React • JavaScript • CSS
              </p>

              <div className="buttons">
                <a
                  href="https://ccottiportfolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  href="https://github.com/ccotti/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div> 

          {/* Project 2 */}
          <div className="project-card">
            <div className="image-wrapper">
              <img src="/weather.png" alt="Weather App" />
            </div>

            <div className="card-content">
              <h3>Weather App</h3>

              <p>
                A React application that fetches real-time weather data using an external API.
              </p>

              <p className="tech">
                React • API • JavaScript
              </p>

              <div className="buttons">
                <a
                  href="https://ccottiweatherapp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  href="https://github.com/ccotti/weather-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;