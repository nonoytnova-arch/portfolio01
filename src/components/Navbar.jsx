{/*import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId, path) => {
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate(path);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">🚀 My Portfolio</h2>

        <ul className="nav-list">
          <li className="nav-item" onClick={() => handleNavClick("home", "/")}>
            Home
          </li>

          <li className="nav-item" onClick={() => handleNavClick("about", "/about")}>
            About
          </li>

          <li
            className="nav-item"
            onClick={() => handleNavClick("projects", "/dashboard")}
          >
            Projects
          </li>

          <li
            className="nav-item"
            onClick={() => handleNavClick("contact", "/contact")}
          >
            Contact
          </li>

          <li className="nav-item nav-link">
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;*/}

{/*import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // Dropdown for desktop
  const [mobileMenu, setMobileMenu] = useState(false); // Mobile menu
  const [mobileDropdown, setMobileDropdown] = useState(false); // Mobile dropdown

  const handleNavClick = (sectionId, path) => {
    setMobileMenu(false); // close mobile menu
    setMobileDropdown(false); // close mobile dropdown
    setOpen(false); // close desktop dropdown

    if (location.pathname === "/" && sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">🚀 My Portfolio</h2>

        
        <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        
        <ul className={`nav-list ${mobileMenu ? "mobile-active" : ""}`}>
          <li className="nav-item" onClick={() => handleNavClick("home", "/")}>Home</li>
          <li className="nav-item" onClick={() => handleNavClick("about", "/about")}>About</li>

          
          <li
            className={`nav-item dropdown ${mobileDropdown ? "open" : ""}`}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onClick={() => setMobileDropdown(!mobileDropdown)}
          >
            Projects ▾
            <ul className="dropdown-menu">
              <li onClick={() => handleNavClick(null, "/todo")}>Todo App</li>
              <li onClick={() => handleNavClick(null, "/calculator")}>Calculator</li>
              <li onClick={() => handleNavClick(null, "/coin-flip")}>Coin Flipper</li>
              <li onClick={() => handleNavClick(null, "/dice")}>Dice Roller</li>
              <li onClick={() => handleNavClick(null, "/quiz")}>Quiz App</li>
              <li onClick={() => handleNavClick(null, "/form")}>Form Validation</li>
            </ul>
          </li>

          <li className="nav-item" onClick={() => handleNavClick("contact", "/contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;*/}

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  /* =========================
     THEME STATE (ADDED)
     ========================= */
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  /* =========================
     EXISTING FUNCTION (UNCHANGED)
     ========================= */
  const handleNavClick = (sectionId, path) => {
    setMobileMenu(false);
    setMobileDropdown(false);
    setDesktopDropdown(false);

    if (location.pathname === "/" && sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">🚀 My Portfolio</h2>

        {/* Theme Switch Button (ADDED) */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav List */}
        <ul className={`nav-list ${mobileMenu ? "mobile-active" : ""}`}>
          <li className="nav-item" onClick={() => handleNavClick("home", "/")}>
            Home
          </li>

          <li className="nav-item" onClick={() => handleNavClick("about", "/about")}>
            About
          </li>

          {/* Projects Dropdown */}
          <li
            className={`nav-item dropdown ${mobileDropdown ? "open" : ""}`}
            onMouseEnter={() => window.innerWidth > 768 && setDesktopDropdown(true)}
            onMouseLeave={() => window.innerWidth > 768 && setDesktopDropdown(false)}
            onClick={() =>
              window.innerWidth <= 768 && setMobileDropdown(!mobileDropdown)
            }
          >
            Projects ▾
            <ul
              className="dropdown-menu"
              style={{
                display:
                  (window.innerWidth > 768 && desktopDropdown) ||
                  (window.innerWidth <= 768 && mobileDropdown)
                    ? "flex"
                    : "none",
              }}
            >
              <li onClick={() => handleNavClick(null, "/todo")}>Todo App</li>
              <li onClick={() => handleNavClick(null, "/calculator")}>Calculator</li>
              <li onClick={() => handleNavClick(null, "/coin-flip")}>Coin Flipper</li>
              <li onClick={() => handleNavClick(null, "/dice")}>Dice Roller</li>
              <li onClick={() => handleNavClick(null, "/quiz")}>Quiz App</li>
              <li onClick={() => handleNavClick(null, "/form")}>Form Validation</li>
            </ul>
          </li>

          <li
            className="nav-item"
            onClick={() => handleNavClick("contact", "/contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

