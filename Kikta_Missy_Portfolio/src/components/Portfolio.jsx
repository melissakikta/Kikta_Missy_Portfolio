import '../styles/Portfolio.css';

//function to create the About Me section
function Portfolio() {
  return (
    <section className="portfolio">
      <div className="page-section">
      {/* Section title */}
        <h1>Portfolio</h1>
        <div className="flex-container">
      {/* Project links */}
          <div className="flex-item project_1">
            <a href="https://github.com/melissakikta/Kikta_Employee_Tracker.git" target="_blank" rel="noopener noreferrer">
              <h2>Employee Tracker</h2>
            </a>
            <a href="https://github.com/melissakikta/Kikta_Employee_Tracker.git" target="_blank" rel="noopener noreferrer">
              <p>GitHub Repo</p>
            </a>
          </div>

          <div className="flex-item project_2">
            <a href="https://github.com/melissakikta/Kikta_Weather_Dashboard.git" target="_blank" rel="noopener noreferrer">
              <h2>Weather Dashboard</h2>
            </a>
            <a href="https://github.com/melissakikta/Kikta_Weather_Dashboard.git" target="_blank" rel="noopener noreferrer">
              <p>GitHub Repo</p>
            </a>
          </div>

          <div className="flex-item project_3">
            <a href="https://github.com/melissakikta/Kikta_Vehicle_Builder.git" target="_blank" rel="noopener noreferrer">
              <h2>Vehicle Builder</h2>
            </a>
            <a href="https://github.com/melissakikta/Kikta_Vehicle_Builder.git" target="_blank" rel="noopener noreferrer">
              <p>GitHub Repo</p>
            </a>
          </div>

          <div className="flex-item project_4">
            <a href="https://github.com/melissakikta/Kikta_README_Generator.git" target="_blank" rel="noopener noreferrer">
              <h2>README Generator</h2>
            </a>
            <a href="https://github.com/melissakikta/Kikta_README_Generator.git" target="_blank" rel="noopener noreferrer">
              <p>GitHub Repo</p>
            </a>
          </div>

          <div className="flex-item project_5">
            <a href="https://kagreene.github.io/Rescuers-down-under/" target="_blank" rel="noopener noreferrer">
              <h2>Rescuers Down Under Pet Rescue</h2>
            </a>
            <a href="https://github.com/kagreene/Rescuers-down-under.git" target="_blank" rel="noopener noreferrer">
              <p>GitHub Repo</p>
            </a>
          </div>

          <div className="flex-item project_6">
            <a href="https://github.com/melissakikta/Portfolio.git" target="_blank" rel="noopener noreferrer">
              <h2>Portfolio (HTML/CSS)</h2>
            </a>
            <a href="https://github.com/melissakikta/Portfolio.git" target="_blank" rel="noopener noreferrer">
              <p>GitHub Repo</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

<section class="page-section">
<h2>Work</h2>
<div class="flex-container">
    <div class="flex-item surf-report">
        <h3>Beach</h3>
    </div>   
    
    <div class="flex-item led-wall">    
        <h3>Waves</h3>
    </div>
        
    <div class="flex-item react-calc">
        <h3>Mountains</h3>
    </div>
        
    <div class="flex-item pastel-puzzles">
        <h3>Forrest</h3>
    </div>

    <div class="flex-item run-buddy">
        <h3>Wild Flowers</h3>
    </div>
</div>    
</section>