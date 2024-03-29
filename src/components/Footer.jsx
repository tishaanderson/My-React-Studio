// Here we are importing a CSS file as a dependency
import '../styles/Footer.css';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className='social-icons'>

        <a href='https://www.linkedin.com/in/tisha-anderson' className='fa icon' alt="LinkedIn Icon">
          <FaLinkedin />
        </a>

        <a href='https://github.com/tishaanderson?tab=repositories' className='fa icon' alt="Github Icon">
          <FaGithub />
        </a>

        <a href='https://www.instagram.com/sweet.tea91/' className='fa icon' alt="Instagram Icon">
          <FaInstagram />
        </a>

      </div>
    </footer>
  );
}

export default Footer;