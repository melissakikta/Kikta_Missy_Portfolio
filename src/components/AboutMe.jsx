//import About Me style sheet
import '../styles/AboutMe.css';
import mkikta from '../assets/images/m_kikta.jpeg';
//function to create the About Me section
function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="aboutMe-container">
      
      
      
      {/* Add an image of me */}
        <img 
          src={mkikta}
          alt="Melissa Kikta Photo"
          className="aboutMe-image"
        />
      
        <div className="aboutMe-text">
          {/* Section title */}
          <h1>About Me</h1>
      {/* Bio paragraph */}
          <p>
          Full Stack Web Developer seeking a career opportunity with a company that values excellence and leadership through service. After a successful tenure in public education, I am excited to transition into software development, bringing my strengths in problem-solving, project management, and collaboration to the tech industry.
          </p>
          <p>
          With a passion for user-centered design and intuitive interfaces, I thrive on analyzing requirements, developing solutions, and refining applications to enhance user experiences. My ability to communicate effectively, adapt to new challenges, and work across teams makes me a strong asset in full-stack development. I look forward to contributing to a dynamic team where I can apply my technical skills and continue learning while building impactful software that supports both customers and employees.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
