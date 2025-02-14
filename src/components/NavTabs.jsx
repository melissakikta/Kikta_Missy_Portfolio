import '../styles/NavTabs.css';
// Passing the currentPage and handlePageChange method from our parent component (PortfolioContainer) to our child component (NavTabs)
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('AboutMe')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          <h2>About Me</h2>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          <h2>Portfolio</h2>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#skills"
          onClick={() => handlePageChange('Skills')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
        >
          <h2>Skills</h2>
        </a>
      </li>
<li className="nav-item">
        <a
          href="#contactForm"
          onClick={() => handlePageChange('ContactForm')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'ContactForm' ? 'nav-link active' : 'nav-link'}
        >
          <h2>Contact Form</h2>
        </a>
      </li>
      <li className="nav-item">
        <a 
          href="https://drive.google.com/file/d/1YEUuChWJHWl27sCJ8AnXGlHjKZh7ij2q/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          >
          <h2>Resume (PDF)</h2>
        </a>
</li>

    </ul>
  );
}

export default NavTabs;
