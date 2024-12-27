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
          <div class="flex-item project_1">
            <h2>Employee Tracker</h2>
          </div>

          <div class="flex-item project_2">
            <h2>Weather Dashboard</h2>
          </div>

          <div class="flex-item project_3">
            <h2>Vehicle Builder</h2>
          </div>

          <div class="flex-item project_4">
            <h2>README Generator</h2>
          </div>

          <div class="flex-item project_5">
            <h2>Portfolio (HTML/CSS)</h2>
          </div>

          <div class="flex-item project_6">
            <h2>Portfolio (HTML/CSS)</h2>
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