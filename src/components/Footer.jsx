import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 SkillPath</p>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;