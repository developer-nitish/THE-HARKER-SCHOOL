import React, { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Globe,
  Users,
  Sparkles,
  Cpu,
  Palette,
  Award,
  Layers,
  CheckCircle2,
} from "lucide-react";

const HERO_SLIDES = [
  {
    id: "slide-campus",
    badge: "INTERNATIONAL INSTITUTION • K–12",
    title: "Inspiring Curious Minds at The Harker School",
    description:
      "A dynamic international learning community nurturing academic excellence, creative problem-solving, character, and lifelong curiosity from early childhood to graduation.",
    image: "/hero.png",
    overlayClass: "harker-overlay-emerald",
    primaryCta: { label: "Explore Admissions", href: "#admissions" },
    secondaryCta: { label: "Academic Programs", href: "#academics" },
  },
  {
    id: "slide-junior",
    badge: "JUNIOR WING • GRADES K–5",
    title: "Playful Discovery & Strong Foundations for Young Learners",
    description:
      "Interactive storytelling, hands-on science kits, art studios, and guided phonics designed to build confidence and joy in every junior student.",
    image: "/hero.png",
    overlayClass: "harker-overlay-gold",
    primaryCta: { label: "Junior Wing Guide", href: "#wings" },
    secondaryCta: { label: "Apply for Junior Wing", href: "#admissions" },
  },
  {
    id: "slide-senior",
    badge: "SENIOR WING • GRADES 6–12",
    title: "Research, Leadership & Global Readiness for Senior Scholars",
    description:
      "Rigorous honors & AP pathways, independent research mentors, debate, and career guidance preparing high school students for top global universities.",
    image: "/hero.png",
    overlayClass: "harker-overlay-navy",
    primaryCta: { label: "Senior Wing Programs", href: "#wings" },
    secondaryCta: { label: "Schedule Campus Tour", href: "#admissions" },
  },
  {
    id: "slide-stem",
    badge: "2D/3D DESIGN, CODING & ROBOTICS LABS",
    title: "Where Imagination Meets Modern Technology & Motion Design",
    description:
      "Students experiment with 3D modeling, interactive simulations, coding, and robotics—turning bold ideas into real-world prototypes.",
    image: "/hero.png",
    overlayClass: "harker-overlay-tech",
    primaryCta: { label: "Discover Innovation Labs", href: "#campus-life" },
    secondaryCta: { label: "View Curriculum", href: "#academics" },
  },
];

const HIGHLIGHTS = [
  {
    icon: <BookOpen size={22} color="#065f46" />,
    tag: "K–12 Curriculum",
    title: "Rigorous Academics",
    desc: "Structured inquiry-based learning, analytical writing, and quantitative mastery tailored to age-appropriate milestones.",
  },
  {
    icon: <Globe size={22} color="#065f46" />,
    tag: "Worldwide Exposure",
    title: "Global Perspective",
    desc: "Cross-cultural exchange, MUN & global seminars, and collaborative projects that broaden students' worldview.",
  },
  {
    icon: <Users size={22} color="#065f46" />,
    tag: "Holistic Growth",
    title: "Vibrant Campus Life",
    desc: "Athletics, performing arts, 2D/3D visual studios, and leadership clubs where every student finds their voice.",
  },
];

const STUDENT_WINGS = [
  {
    id: "junior",
    group: "Junior Students (K–5)",
    badge: "Ages 5 – 11",
    accent: "bg-warning text-dark",
    icon: <Palette size={20} color="#b45309" />,
    summary:
      "Warm, activity-rich classrooms focused on joyful curiosity, foundational literacy & numeracy, motor skills, and creative expression.",
    points: [
      "Visual storytelling, 2D craft & clay/3D tactile learning",
      "Guided reading, foundational math & nature discovery",
      "Small class sizes with dedicated homeroom & care mentors",
    ],
  },
  {
    id: "middle",
    group: "Middle School Explorers (6–8)",
    badge: "Ages 11 – 14",
    accent: "bg-success text-white",
    icon: <Layers size={20} color="#065f46" />,
    summary:
      "A bridge stage encouraging independent thinking, collaborative teamwork, digital literacy, and exploring diverse clubs & sports.",
    points: [
      "Foundational coding, digital design & science lab experiments",
      "Public speaking, dramatics, music & inter-house sports",
      "Study skills, time management & curiosity-driven projects",
    ],
  },
  {
    id: "senior",
    group: "Senior Scholars (9–12)",
    badge: "Ages 14 – 18",
    accent: "bg-dark text-white",
    icon: <Cpu size={20} color="#d97706" />,
    summary:
      "High-rigor academic specialization, advanced STEM & humanities seminars, capstone research, and personalized university counseling.",
    points: [
      "Advanced coursework, AI/IoT & engineering/3D prototyping labs",
      "Student-led publications, hackathons & leadership councils",
      "1-on-1 college readiness, portfolio & scholarship guidance",
    ],
  },
];

const KEY_METRICS = [
  { value: "12:1", label: "Student–Teacher Ratio" },
  { value: "45+", label: "Clubs, Arts & STEM Labs" },
  { value: "100%", label: "University Guidance Support" },
  { value: "K–12", label: "Seamless Growth Pathway" },
];

const Home = () => {
  const [selectedWing, setSelectedWing] = useState("all");

  const visibleWings =
    selectedWing === "all"
      ? STUDENT_WINGS
      : STUDENT_WINGS.filter((wing) => wing.id === selectedWing);

  const handleImageFallback = (e) => {
    if (!e.currentTarget.dataset.fallbackApplied) {
      e.currentTarget.dataset.fallbackApplied = "true";
      e.currentTarget.src = "/hero.png";
    }
  };

  return (
    <main id="home">
      {/* 1. Bootstrap 4-Slide Hero Carousel with 2D/3D Motion Accents */}
      <section className="harker-hero-section" aria-label="Featured School Highlights">
        <div
          id="harkerHeroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5500"
        >
          {/* Slide Indicators */}
          <div className="carousel-indicators mb-4">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                data-bs-target="#harkerHeroCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}: ${slide.badge}`}
              />
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            {HERO_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
              >
                <div className="harker-slide-wrapper">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="harker-slide-bg"
                    onError={handleImageFallback}
                  />
                  <div className={`harker-slide-overlay ${slide.overlayClass}`} />

                  {/* Subtle 2D & 3D Floating Motion Elements */}
                  <div className="harker-3d-shape harker-shape-cube" aria-hidden="true" />
                  <div className="harker-3d-shape harker-shape-ring" aria-hidden="true" />
                  <div className="harker-3d-shape harker-shape-pill" aria-hidden="true" />

                  {/* Slide Content */}
                  <div className="container harker-hero-content">
                    <span className="harker-hero-badge mb-3">
                      <Sparkles size={14} />
                      <span>{slide.badge}</span>
                    </span>

                    <h1 className="harker-hero-title mb-3">{slide.title}</h1>

                    <p className="harker-hero-desc mb-4">{slide.description}</p>

                    <div className="d-flex flex-wrap gap-3">
                      <a
                        href={slide.primaryCta.href}
                        className="btn harker-btn-gold d-inline-flex align-items-center gap-2"
                      >
                        <span>{slide.primaryCta.label}</span>
                        <ArrowRight size={17} />
                      </a>

                      <a
                        href={slide.secondaryCta.href}
                        className="btn harker-btn-glass d-inline-flex align-items-center gap-2"
                      >
                        <span>{slide.secondaryCta.label}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Previous / Next Controls */}
          <button
            className="carousel-control-prev d-none d-md-flex"
            type="button"
            data-bs-target="#harkerHeroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous Slide</span>
          </button>

          <button
            className="carousel-control-next d-none d-md-flex"
            type="button"
            data-bs-target="#harkerHeroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next Slide</span>
          </button>
        </div>
      </section>

      {/* 2. Core Highlights Cards */}
      <section id="academics" className="harker-highlights-wrap pb-5">
        <div className="container">
          <div className="row g-4">
            {HIGHLIGHTS.map((item) => (
              <div className="col-12 col-md-4" key={item.title}>
                <article className="harker-3d-card">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="harker-icon-badge">{item.icon}</div>
                    <span className="badge rounded-pill text-bg-light border text-success fw-semibold">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="h5 fw-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-secondary small mb-0 lh-base">{item.desc}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Junior & Senior Wings Section (Tailored by Student Stage) */}
      <section id="wings" className="py-5 bg-light border-top border-bottom">
        <div className="container py-2">
          <div className="row align-items-end justify-content-between g-3 mb-4">
            <div className="col-lg-7">
              <span className="text-uppercase fw-bold small text-warning tracking-wide">
                Tailored Learning Pathways
              </span>
              <h2 className="fw-bold text-dark mt-1 mb-2">
                Designed for Both Junior &amp; Senior Students
              </h2>
              <p className="text-secondary mb-0">
                Har age group ke bachhon ki zaroorat alag hoti hai—chhote bachhon ke liye
                creative play aur bade bachhon ke liye deep research, coding &amp; leadership.
              </p>
            </div>

            {/* Interactive Stage Filter Buttons */}
            <div className="col-lg-5 d-flex flex-wrap gap-2 justify-content-lg-end">
              <button
                type="button"
                onClick={() => setSelectedWing("all")}
                className={`btn harker-wing-btn ${
                  selectedWing === "all"
                    ? "btn-success"
                    : "btn-outline-secondary bg-white"
                }`}
              >
                All Wings
              </button>
              <button
                type="button"
                onClick={() => setSelectedWing("junior")}
                className={`btn harker-wing-btn ${
                  selectedWing === "junior"
                    ? "btn-warning text-dark"
                    : "btn-outline-secondary bg-white"
                }`}
              >
                Junior (K–5)
              </button>
              <button
                type="button"
                onClick={() => setSelectedWing("senior")}
                className={`btn harker-wing-btn ${
                  selectedWing === "senior"
                    ? "btn-dark"
                    : "btn-outline-secondary bg-white"
                }`}
              >
                Senior (6–12)
              </button>
            </div>
          </div>

          <div className="row g-4">
            {visibleWings.map((wing) => (
              <div
                key={wing.id}
                className={
                  visibleWings.length === 1
                    ? "col-12"
                    : "col-12 col-md-6 col-xl-4"
                }
              >
                <div className="harker-3d-card d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <div className="p-2 rounded-3 bg-light border">
                          {wing.icon}
                        </div>
                        <h3 className="h6 fw-bold mb-0 text-dark">
                          {wing.group}
                        </h3>
                      </div>
                      <span className={`badge rounded-pill ${wing.accent}`}>
                        {wing.badge}
                      </span>
                    </div>

                    <p className="text-secondary small mb-3">{wing.summary}</p>

                    <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                      {wing.points.map((pt) => (
                        <li
                          key={pt}
                          className="d-flex align-items-start gap-2 small text-dark"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-success flex-shrink-0 mt-1"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#admissions"
                    className="btn btn-sm btn-outline-success fw-semibold align-self-start"
                  >
                    Inquire for {wing.badge} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. School Snapshot / Key Metrics Strip */}
      <section id="campus-life" className="py-5">
        <div className="container">
          <div className="row g-3 g-md-4">
            {KEY_METRICS.map((metric) => (
              <div className="col-6 col-lg-3" key={metric.label}>
                <div className="harker-stat-box h-100 d-flex flex-column justify-content-center">
                  <div className="display-6 fw-bolder text-success mb-1">
                    {metric.value}
                  </div>
                  <div className="small fw-semibold text-secondary">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;