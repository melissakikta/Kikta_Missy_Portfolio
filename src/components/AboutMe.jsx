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
          I am looking for a career opportunity where the company and people match my enthusiasm for creating excellence and leading through service. After a successful tenure in public education, I am excited to apply my skills in problem-solving, project management, and collaboration to the world of software development. With a passion for user-centered design and intuitive interfaces, I thrive on analyzing requirements, developing solutions, and refining applications to enhance user experiences. I look forward to contributing to a team where I can leverage my strengths in communication, adaptability, and full-stack development to build impactful software that supports both customers and employees.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
