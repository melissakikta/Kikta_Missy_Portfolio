//import header style sheet
import '../styles/Footer.css';

//function to create the Header
function footer() {
  return (
    <div className="footer">
      <ul className="footer-links" >
      {/* Add links to LinkedIn, GitHub, and BlueSky */}
      <h2>
          <a href="https://www.linkedin.com/in/melissakikta" target="_blank" rel="noopener noreferrer">
            LinkedIn <img src="../src/assets/images/linkedin.webp" alt="linkedin link"/>
          </a>
        </h2>

        <h2>
          <a href="https://github.com/melissakikta" target="_blank" rel="noopener noreferrer">
            GitHub <img src="../src/assets/images/github.png" alt="github link"/>
          </a>
        </h2>

        <h2>
          <a href="https://bsky.app/profile/missykikta.bsky.social" target="_blank" rel="noopener noreferrer">
            BlueSky <img src="../src/assets/images/bluesky.webp" alt="bluesky link"/>
          </a>
        </h2>
      </ul>
    </div>
  );
}

export default footer;
