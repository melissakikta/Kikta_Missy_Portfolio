//import About Me style sheet
import '../styles/AboutMe.css';
import mkikta from '../assests/images/m_kikta.jpeg';
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
            I am looking for a career opportunity where the company and people match my enthusiasm for creating excellence and leading through service. After a successful tenure in public education, I would like to shift my focus to more creative pursuits on user design and interface. I truly value working with others to support their growth and achieve our goals. I am excited to bring my skills in project management, communication, collaboration, and full stack development to a new team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
