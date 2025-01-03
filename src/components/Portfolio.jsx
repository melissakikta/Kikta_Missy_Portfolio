import '../styles/Portfolio.css';
import github from '../assets/images/github.png';
import project1 from '../assets/images/employees.png';
import project2 from '../assets/images/weather.webp';
import project3 from '../assets/images/vehicle.jpg';
import project4 from '../assets/images/readme.png';
import project5 from '../assets/images/pets.jpeg';
import project6 from '../assets/images/kikta.png';


//function to create the About Me section
function Portfolio() {
  return (
    <section className="portfolio">
      <div className="page-section">
        <h1>Portfolio</h1>
        <div className="flex-container">
          <div className="flex-item">
            <img src={project1} alt="Employee Tracker" className="project-image" />
            <h2>
              <a href="https://github.com/melissakikta/Kikta_Employee_Tracker.git" target="_blank" rel="noopener noreferrer">
                Employee Tracker
              </a>
              <a href="https://github.com/melissakikta/Kikta_Employee_Tracker.git" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub Logo" className="github-icon" />
              </a>
            </h2>
          </div>

          <div className="flex-item">
            <img src={project2} alt="Weather Dashboard" className="project-image" />
            <h2>
              <a href="https://github.com/melissakikta/Kikta_Weather_Dashboard.git" target="_blank" rel="noopener noreferrer">
                Weather Dashboard
              </a>
              <a href="https://github.com/melissakikta/Kikta_Weather_Dashboard.git" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub Logo" className="github-icon" />
              </a>
            </h2>
          </div>

          <div className="flex-item">
            <img src={project3} alt="Vehicle Builder" className="project-image" />
            <h2>
              <a href="https://github.com/melissakikta/Kikta_Vehicle_Builder.git" target="_blank" rel="noopener noreferrer">
                Vehicle Builder
              </a>
              <a href="https://github.com/melissakikta/Kikta_Vehicle_Builder.git" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub Logo" className="github-icon" />
              </a>
            </h2>
          </div>

          <div className="flex-item">
            <img src={project4} alt="README Generator" className="project-image" />
            <h2>
              <a href="https://github.com/melissakikta/Kikta_README_Generator.git" target="_blank" rel="noopener noreferrer">
                README Generator
              </a>
              <a href="https://github.com/melissakikta/Kikta_README_Generator.git" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub Logo" className="github-icon" />
              </a>
            </h2>
          </div>

          <div className="flex-item">
            <img src={project5} alt="Rescuers Down Under" className="project-image" />
            <h2>
              <a href="https://kagreene.github.io/Rescuers-down-under/" target="_blank" rel="noopener noreferrer">
                Rescuers Down Under Pet Rescue
              </a>
              <a href="https://github.com/kagreene/Rescuers-down-under.git" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub Logo" className="github-icon" />
              </a>
            </h2>
          </div>

          <div className="flex-item">
            <img src={project6} alt="Portfolio" className="project-image" />
            <h2>
              <a href="https://github.com/melissakikta/Portfolio.git" target="_blank" rel="noopener noreferrer">
                Portfolio (HTML/CSS)
              </a>
              <a href="https://github.com/melissakikta/Portfolio.git" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub Logo" className="github-icon" />
              </a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;