import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/nav_logo.png"

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Navbar order
  const homeSections = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
  ];

  // Scroll to a section after navigating to the Home page
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.slice(1);

      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [location.pathname, location.hash]);

  // Navigate to sections on the Home page
  function handleSectionNavigation(event, sectionId) {
    event.preventDefault();

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", `/#${sectionId}`);
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" aria-label="Go to homepage">
          <img src={logo} alt="Logo" height={50}/>
        </Link>

        {/* Navigation links */}
        <div className="navbar-links">
          {homeSections.map((section) => (
            <a
              key={section.id}
              href={`/#${section.id}`}
              className="navbar-link"
              onClick={(event) =>
                handleSectionNavigation(event, section.id)
              }
            >
              {section.label}
            </a>
          ))}

          {/* Contact page */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "active" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}