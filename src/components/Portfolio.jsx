import '../styles/Portfolio.css';
import github from '../assets/images/github.png';
import project1 from '../assets/images/employees.png';
import project2 from '../assets/images/weather.webp';
import project3 from '../assets/images/books.jpg';
import project4 from '../assets/images/byteshift.png';
import project5 from '../assets/images/pets.jpeg';
import project6 from '../assets/images/candidate.jpg';


//function to create the About Me section
function Portfolio() {
  return (
    <section className="portfolio">
      <div className="page-section">
        <h1>Portfolio</h1>
        <div className="flex-container">
            
          <div className="flex-item">
            <div className="img-container">
              <img src={project4} alt="README Generator" className="project-image" />
                <div className="overlay">
                  <p>Feature Rich Resource Sharing Platform for teams or groups!
                  </p>
                  <p><u>Responsibilities: </u>Front End User Expereince</p>
                  <p><u>Language: </u>TypeScript, Java Script</p>
                  <p><u>Tools: </u> Node,js, Vite, Graphql, MongoDB, Ant Design </p>
                </div>
              </div>
            <h2>
              <a href="https://byteshift-1.onrender.com/" target="_blank" rel="noopener noreferrer">
                ByteShift
              </a>
              <a href="https://github.com/melissakikta/ByteShift.git" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub Logo" className="github-icon" />
              </a>
            </h2>
          </div>

          <div className="flex-item">
            <div className="img-container">
              <img src={project1} alt="Employee Tracker" className="project-image" />
                <div className="overlay">
                  <p>A testing system to quiz users on their Python knowledge</p>
                  <p><u>Responsibilities:</u> Creating the CI/CD pipeline</p>
                  <p><u>Languages:</u> TypeScript, Java Script</p>
                  <p><u>Tools:</u> Node.js, Vite, and Cypress</p>
                </div>
            </div>
            <h2>
              <a href="https://kikta-cicd.onrender.com" target="_blank" rel="noopener noreferrer">
                 Quiz 
              </a>
              <a href="https://github.com/melissakikta/Kikta_CICD.git" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub Logo" className="github-icon" />
              </a>
            </h2>
          </div>


          <div className="flex-item">
            <div className="img-container">
              <img src={project2} alt="Weather Dashboard" className="project-image" />
                <div className="overlay">
                  <p>An application that displays open source weather data in an eye catching way. </p>
                  <p><u>Responsibilities:</u> Back-end support of API call and Connection between Front and Back end </p>
                  <p><u>Language:</u> TypeScript, JavaScript, HTML, and CSS</p>
                  <p><u>Tools:</u> API </p>
                </div>
              </div>
            <h2>
              <a href="https://kikta-weather-dashboard.onrender.com" target="_blank" rel="noopener noreferrer">
                Weather Dashboard
              </a>
              <a href="https://github.com/melissakikta/Kikta_Weather_Dashboard.git" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub Logo" className="github-icon" />
              </a>
            </h2>
          </div>

          <div className="flex-item">
            <div className="img-container">
              <img src={project3} alt="book" className="project-image" />
                <div className="overlay">
                    <p>An application that allows users to search for books and save to their account. </p>
                    <p><u>Responsibilities:</u> Converting a REASTful API to a GraphQL API</p>
                    <p><u>Language:</u> TypeScript, JavaScript, HTML, CSS</p>
                    <p><u>Tools:</u> API, GraphQL </p>
                </div>
            </div>
            <h2>
              <a href="https://kikta-book-search-engine.onrender.com/" target="_blank" rel="noopener noreferrer">
                Book Search
              </a>
              <a href="https://github.com/melissakikta/Kikta_Book_Search_Engine.git" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub Logo" className="github-icon" />
              </a>
            </h2>
          </div>



          <div className="flex-item">
            <div className="img-container">
              <img src={project6} alt="Portfolio" className="project-image" />
                <div className="overlay">
                  <p>This application displays, sorts, and stores potential candidates. </p>
                  <p><u>Responsibilities:</u> Front-end Completion and API call </p>
                  <p><u>Language:</u> TypeScript</p> 
                  <p><u>Tools:</u> API </p>
                </div>
              </div>
            <h2>
              <a href="https://kikta-candidate-search-1.onrender.com/" rel="noopener noreferrer">
                Candidate Search
              </a>
              <a href="https://github.com/melissakikta/Kikta_Candidate_Search.git" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub Logo" className="github-icon" />
              </a>
            </h2>
          </div>
          
          <div className="flex-item">
            <div className="img-container">
              <img src={project5} alt="Rescuers Down Under" className="project-image" />
                <div className="overlay">
                  <p>A front end website designed to showcase adorable pets available for rescue. </p>
                  <p><u>Responsibilities:</u> Navigation, Styling, Page Layout </p>
                  <p><u>Language:</u> HTML, CSS </p>
                </div>
            </div>
            <h2>
              <a href="https://kagreene.github.io/Rescuers-down-under/" target="_blank" rel="noopener noreferrer">
                Rescuers Down Under Pet Rescue
              </a>
              <a href="https://github.com/kagreene/Rescuers-down-under.git" target="_blank" rel="noopener noreferrer">
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