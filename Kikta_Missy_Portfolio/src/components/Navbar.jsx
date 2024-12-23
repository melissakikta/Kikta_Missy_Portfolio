//import navbar style sheet
import '../styles/Navbar.css';

//function to create the Navbar
function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      {/* Navgation links */}
      <a href="/">About Me</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
      <a href="/resume">Resume</a>
    </nav>
  );
}

export default Navbar;
