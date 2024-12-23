//import About Me style sheet
import '../styles/ContactForm.css';

//function to create the About Me section
function AboutMe() {
  return (
    <section style={styles.aboutMeStyles} className="contactForm">
      <div style={styles.aboutMeStyles} className="page-section">
      
      {/* Section title */}
        <h2>Contact</h2>
      
      
      {/* Bio paragraph */}
        <p>
        I would love to hear from you! Please use the form below to leave me a message. 
        </p>
        <p>I hope you have a great day!</p>
      

      </div>
    </section>
  );
}

export default AboutMe;
