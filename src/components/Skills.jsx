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
            <li><strong>Front-End Development</strong></li>
            <li>HTML, CSS, JavaScript, React, Web APIs</li>
            <li><strong>Back-End Development</strong></li>
            <li>Node.js, Express.js, Python Fundamentals</li>
          </ul>
        </div>
        <div className="skills-box">
          <ul>
            <li><strong>Database Management</strong></li>
            <li>PostgreSQL, MongoDB, NoSQL</li>
            <li><strong>Full-Stack Development</strong></li>
            <li>MERN Stack, TypeScript, Authentication & Authorization, API Consumption</li>
            <li><strong>Version Control & Development</strong></li>
            <li>Git, CI/CD Pipelines, Testing (unit, component, integration, and end-to-end)</li>
          </ul>
        </div>
        <div className="skills-box">  
          <ul>
            <li><strong>Advanced Software Development</strong></li>
            <li>OOP, Agile Methodologies, Prompt Engineering</li>
            <li><strong>Additional Tools</strong></li>
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