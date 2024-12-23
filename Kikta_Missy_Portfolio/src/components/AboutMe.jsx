//import About Me style sheet
import '../styles/AboutMe.css';

//function to create the About Me section
function AboutMe() {
  return (
    <section style={styles.aboutMeStyles} className="aboutMe">
      <h2>About Me</h2>
      <p>
      I am looking for a career opportunity where the company and people match my enthusiasm for creating excellence and leading through service. After a successful tenure in public education, I would like to shift my focus to more creative pursuits on user design and interface. I truly value working with others to support their growth and achieve our goals
      </p>
      <img src="../assets/images/m_kikta.jpeg" alt="Melissa Kikta Photo"/>
    </section>
  );
}

export default AboutMe;
