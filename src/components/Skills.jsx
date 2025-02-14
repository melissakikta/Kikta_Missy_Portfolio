//import About Me style sheet
import '../styles/Skills.css';

//function to create the About Me section
function Skills () {
  return (
    <div className="skills-container">
      <h2>Technical Skills</h2>
      <div className="skills-columns">
        <div className="skills-box">
          <ul>
            <li><strong><u>Front-End Development</u></strong></li>
            <li>HTML, CSS, JavaScript, React, Web APIs</li>
            <br></br>
            <li><strong><u>Back-End Development</u></strong></li>
            <li>Node.js, Express.js, Python Fundamentals</li>
          </ul>
        </div>
        <div className="skills-box">
          <ul>
            <li><strong><u>Database Management</u></strong></li>
            <li>PostgreSQL, MongoDB, NoSQL</li>
            <br></br>
            <li><strong><u>Full-Stack Development</u></strong></li>
            <li>MERN Stack, TypeScript, Authentication & Authorization, API Consumption</li>
            <br></br>
            <li><strong><u>Version Control & Development</u></strong></li>
            <li>Git, CI/CD Pipelines, Testing (unit, component, integration, and end-to-end)</li>
          </ul>
        </div>
        <div className="skills-box">  
          <ul>
            <li><strong><u>Advanced Software Development</u></strong></li>
            <li>OOP, Agile Methodologies, Prompt Engineering</li>
            <br></br>
            <li><strong><u>Additional Tools</u></strong></li>
            <li>AI-Assisted Coding, Google Suite, Microsoft Office</li>
          </ul>  
        </div>
      </div>

      <h2>Areas of Expertise</h2>
      <div className="skills-columns">
        <div className="skills-box">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Postgres</li>
            <li>Git</li>
            <li>Google Suite</li>
          </ul>
        </div>
        <div className="skills-box">
          <ul>
            <li>Teamwork/Team Building</li>
            <li>Written and Oral Communication</li>
            <li>Cross-Functional Team Leadership</li>
            <li>Goal Oriented Measurement</li>
            <li>Technology Integration</li>
            <li>Creativity</li>
            <li>Adaptability</li>
          </ul>
        </div>
        <div className="skills-box">  
          <ul>
            <li>Organization</li>
            <li>Critical Thinking</li>
            <li>Attention to Detail</li>
            <li>Coaching and Mentoring</li>
            <li>Resource Allocation and Management</li>
            <li>Professional Development</li>
          </ul>  
        </div>
      </div>

    </div>

    
    
  );
};

export default Skills;