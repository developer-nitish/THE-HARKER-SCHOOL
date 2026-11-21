import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  GraduationCap,
  MapPin,
  Phone,
  ArrowRight,
  Clock,
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Academics", href: "#academics", id: "academics" },
  { name: "Wings", href: "#wings", id: "wings" },
  { name: "Admissions", href: "#admissions", id: "admissions" },
  { name: "Campus Life", href: "#campus-life", id: "campus-life" },
  { name: "Contact", href: "#contact-page", id: "contact-page" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  // 1. Scroll effect + Active section scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 130;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_LINKS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Close mobile menu on outside click or Escape key
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [menuOpen]);

  // 3. Smooth scroll handler with sticky header offset
  const handleNavClick = (e, link) => {
    setActiveSection(link.id);
    setMenuOpen(false);

    const targetEl = document.getElementById(link.id);
    if (targetEl) {
      e.preventDefault();
      const headerHeight = navRef.current ? navRef.current.offsetHeight : 85;
      const topPos =
        targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };

  return (
    <header ref={navRef} className="sticky-top">
      {/* Top Utility Bar */}
      <div className="harker-topbar py-2">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-1 text-center text-md-start">
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-3">
            <span className="d-inline-flex align-items-center gap-1">
              <MapPin size={14} className="text-warning flex-shrink-0" />
              <span>Silicon Valley Campuses • International K–12</span>
            </span>
            <span className="d-none d-lg-inline-flex align-items-center gap-1 text-white-50">
              <Clock size={13} className="text-warning flex-shrink-0" />
              <span>Mon – Fri: 8:00 AM – 4:30 PM</span>
            </span>
          </div>

          <a
            href="tel:+14085550192"
            className="harker-topbar-link d-inline-flex align-items-center gap-1 fw-medium"
          >
            <Phone size={14} className="text-warning flex-shrink-0" />
            <span>Admissions Helpline: +1 (408) 555-0192</span>
          </a>
        </div>
      </div>

      {/* Main Bootstrap Responsive Navbar */}
      <nav
        className={`navbar navbar-expand-lg harker-navbar ${
          isScrolled ? "harker-navbar-scrolled py-2" : "py-2 py-lg-3"
        }`}
        aria-label="Main Navigation"
      >
        <div className="container">
          {/* Brand Logo */}
          <a
            href="#home"
            className="navbar-brand d-flex align-items-center gap-2 gap-sm-3 m-0"
            onClick={(e) => handleNavClick(e, NAV_LINKS[0])}
          >
            <div className="harker-logo-badge d-flex align-items-center justify-content-center flex-shrink-0">
              <GraduationCap size={24} color="#ffffff" />
            </div>
            <div>
              <div className="harker-brand-title">THE HARKER SCHOOL</div>
              <div className="harker-brand-subtitle">Excellence in Education</div>
            </div>
          </a>

          {/* Mobile & Tablet Hamburger Toggle */}
          <button
            className="navbar-toggler harker-toggler d-lg-none"
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-controls="harkerNavbarContent"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Collapsible Navigation Menu */}
          <div
            className={`collapse navbar-collapse harker-navbar-collapse ${
              menuOpen ? "show" : ""
            }`}
            id="harkerNavbarContent"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
              {NAV_LINKS.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-link harker-nav-link ${
                      activeSection === link.id ? "active" : ""
                    }`}
                    aria-current={
                      activeSection === link.id ? "page" : undefined
                    }
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              {/* Primary CTA Button */}
              <li className="nav-item mt-3 mt-lg-0 ms-lg-3">
                <a
                  href="#admissions"
                  className="btn harker-apply-btn w-100 w-lg-auto d-inline-flex align-items-center justify-content-center gap-2"
                  onClick={(e) =>
                    handleNavClick(e, { id: "admissions", href: "#admissions" })
                  }
                >
                  <span>Apply Now</span>
                  <ArrowRight size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;