//import About Me style sheet
import '../styles/AboutMe.css';

//function to create the About Me section
function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="page-section">
      
      {/* Section title */}
        <h2>About Me</h2>
      
      
      {/* Bio paragraph */}
        <p>
        I am looking for a career opportunity where the company and people match my enthusiasm for creating excellence and leading through service. After a successful tenure in public education, I would like to shift my focus to more creative pursuits on user design and interface. I truly value working with others to support their growth and achieve our goals
        </p>
      
      {/* Add an image of me */}
        <img src="../src/assets/images/m_kikta.jpeg" alt="Melissa Kikta Photo"/>
      </div>
    </section>
  );
}

export default AboutMe;
