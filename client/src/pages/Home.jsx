import React from "react";
import { ArrowRight, BookOpen, Globe, Users } from "lucide-react";

const Home = () => {
  const highlights = [
    {
      icon: <BookOpen size={22} color="#065f46" />,
      title: "Rigorous Academics",
      desc: "Advanced curriculum, research opportunities, and inquiry-driven learning from early childhood to high school.",
    },
    {
      icon: <Globe size={22} color="#065f46" />,
      title: "Global Perspective",
      desc: "Preparing students to think critically, collaborate across cultures, and lead in an interconnected world.",
    },
    {
      icon: <Users size={22} color="#065f46" />,
      title: "Vibrant Campus Life",
      desc: "Athletics, performing arts, robotics, and student clubs that nurture every individual talent.",
    },
  ];

  return (
    <main id="home">
      {/* Hero Section */}
      <section style={styles.hero}>
        <img src="/hero.png" alt="The Harker School Campus" style={styles.heroImg} />
        <div style={styles.overlay} />

        <div style={styles.heroContent}>
          <span style={styles.badge}>INTERNATIONAL INSTITUTION • K–12</span>
          <h1 style={styles.heroTitle}>
            Inspiring Curious Minds at The Harker School
          </h1>
          <p style={styles.heroText}>
            A dynamic international learning community dedicated to academic
            excellence, creativity, character, and lifelong discovery.
          </p>

          <div style={styles.heroActions}>
            <a href="#admissions" style={styles.primaryBtn}>
              Explore Admissions <ArrowRight size={17} />
            </a>
            <a href="#academics" style={styles.secondaryBtn}>
              Academic Programs
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section id="academics" style={styles.highlightsSection}>
        <div style={styles.highlightsGrid}>
          {highlights.map((item) => (
            <div key={item.title} style={styles.card}>
              <div style={styles.iconBox}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

const styles = {
  hero: {
    position: "relative",
    minHeight: "78vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  heroImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(6, 78, 59, 0.88) 0%, rgba(17, 24, 39, 0.65) 60%, rgba(17, 24, 39, 0.35) 100%)",
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1280px",
    width: "100%",
    margin: "0 auto",
    padding: "48px 16px",
    color: "#ffffff",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: "5px 12px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "0.8px",
    marginBottom: "16px",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
    fontWeight: "800",
    lineHeight: 1.15,
    maxWidth: "740px",
    marginBottom: "16px",
  },
  heroText: {
    fontSize: "17px",
    maxWidth: "600px",
    color: "#f3f4f6",
    marginBottom: "28px",
  },
  heroActions: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#d97706",
    color: "#ffffff",
    padding: "12px 22px",
    borderRadius: "6px",
    fontWeight: "600",
    fontSize: "15px",
  },
  secondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.14)",
    border: "1px solid rgba(255, 255, 255, 0.45)",
    color: "#ffffff",
    padding: "12px 22px",
    borderRadius: "6px",
    fontWeight: "600",
    fontSize: "15px",
  },
  highlightsSection: {
    maxWidth: "1280px",
    margin: "-56px auto 64px",
    padding: "0 16px",
    position: "relative",
    zIndex: 5,
  },
  highlightsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
  },
  iconBox: {
    width: "44px",
    height: "44px",
    borderRadius: "8px",
    backgroundColor: "#ecfdf5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "14px",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "8px",
  },
  cardDesc: {
    fontSize: "14px",
    color: "#4b5563",
  },
};

export default Home;