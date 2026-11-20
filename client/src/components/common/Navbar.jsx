import React, { useState } from "react";
import { Menu, X, GraduationCap, MapPin, Phone } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Admissions", href: "#admissions" },
    { name: "Campus Life", href: "#campus-life" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header style={styles.header}>
      {/* Top Utility Bar */}
      <div style={styles.topBar}>
        <div style={styles.topBarInner}>
          <span style={styles.topItem}>
            <MapPin size={14} /> Silicon Valley Campuses • International K–12
          </span>
          <span style={styles.topItem}>
            <Phone size={14} /> Admissions Helpline: +1 (408) 555-0192
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <div style={styles.navContainer}>
        <a href="#home" style={styles.brand}>
          <div style={styles.logoBadge}>
            <GraduationCap size={24} color="#ffffff" />
          </div>
          <div>
            <div style={styles.brandTitle}>THE HARKER SCHOOL</div>
            <div style={styles.brandSubtitle}>Excellence in Education</div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav style={styles.desktopNav}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={styles.navLink}>
              {link.name}
            </a>
          ))}
          <a href="#admissions" style={styles.applyBtn}>
            Apply Now
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={styles.mobileBtn}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#admissions"
            style={styles.mobileApplyBtn}
            onClick={() => setMenuOpen(false)}
          >
            Apply Now
          </a>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
  },
  topBar: {
    backgroundColor: "#064e3b",
    color: "#ecfdf5",
    fontSize: "12px",
    padding: "6px 16px",
  },
  topBarInner: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "8px",
  },
  topItem: {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
  },
  navContainer: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "12px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logoBadge: {
    width: "42px",
    height: "42px",
    borderRadius: "8px",
    backgroundColor: "#065f46",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  brandTitle: {
    fontSize: "18px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    color: "#064e3b",
  },
  brandSubtitle: {
    fontSize: "11px",
    color: "#b45309",
    fontWeight: "600",
    letterSpacing: "0.4px",
  },
  desktopNav: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  },
  navLink: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#1f2937",
  },
  applyBtn: {
    backgroundColor: "#b45309",
    color: "#ffffff",
    padding: "9px 18px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "600",
  },
  mobileBtn: {
    display: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#111827",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    padding: "12px 16px 20px",
    gap: "12px",
    backgroundColor: "#ffffff",
    borderTop: "1px solid #e5e7eb",
  },
  mobileLink: {
    fontSize: "15px",
    fontWeight: "500",
    padding: "6px 0",
  },
  mobileApplyBtn: {
    backgroundColor: "#065f46",
    color: "#ffffff",
    padding: "10px 16px",
    borderRadius: "6px",
    textAlign: "center",
    fontWeight: "600",
  },
};

export default Navbar;