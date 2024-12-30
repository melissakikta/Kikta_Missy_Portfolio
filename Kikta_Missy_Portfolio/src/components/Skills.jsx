//import About Me style sheet
import '../styles/Skills.css';

//function to create the About Me section
function Skills () {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-columns">
        <div className="skills-box">
          <h2>Technical Skills</h2>
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
          <h2>Soft Skills</h2>
          <ul>
            <li>Problem Solving</li>
            <li>Written and Oral Communication</li>
            <li>Teamwork</li>
            <li>Time Management</li>
            <li>Leadership</li>
            <li>Creativity</li>
            <li>Adaptability</li>
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