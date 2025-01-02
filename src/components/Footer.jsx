//import header style sheet
import '../styles/Footer.css';
import linkedIn from '../assets/images/linkedin.webp';
import github from '../assets/images/github.png';
import blueSky from '../assets/images/bluesky.webp';

//function to create the Header
function footer() {
  return (
    <div className="footer">
      <ul className="footer-links" >
      {/* Add links to LinkedIn, GitHub, and BlueSky */}
      <h2>
          <a href="https://www.linkedin.com/in/melissakikta" target="_blank" rel="noopener noreferrer">
            LinkedIn <img src={linkedIn} alt="linkedin link"/>
          </a>
        </h2>

        <h2>
          <a href="https://github.com/melissakikta" target="_blank" rel="noopener noreferrer">
            GitHub <img src={github} alt="github link"/>
          </a>
        </h2>

        <h2>
          <a href="https://bsky.app/profile/missykikta.bsky.social" target="_blank" rel="noopener noreferrer">
            BlueSky <img src={blueSky} alt="bluesky link"/>
          </a>
        </h2>
      </ul>
    </div>
  );
}

export default footer;
